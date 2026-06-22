const GRANT_EVENTS = new Set(['checkout.completed', 'subscription.active', 'subscription.trialing', 'subscription.paid'])
const REVOKE_EVENTS = new Set(['subscription.expired', 'subscription.paused'])

export function jsonResponse(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...corsHeaders(),
      ...(init.headers || {})
    }
  })
}

export function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'authorization,content-type,creem-signature'
  }
}

export function getProductIdForCycle(env, cycle) {
  if (cycle !== 'lifetime') return ''
  return env.CREEM_PRODUCT_ID || 'prod_7LMyOwuDPbkgzOhkuHXZEH'
}

export function getCreemApiBase(apiKey) {
  return apiKey?.startsWith('creem_test_') ? 'https://test-api.creem.io' : 'https://api.creem.io'
}

export function getSiteUrl(env, requestUrl) {
  const configured = (env.SITE_URL || env.NEXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '')
  if (configured) return configured
  const url = new URL(requestUrl)
  return `${url.protocol}//${url.host}`
}

export function buildCheckoutPayload({ productId, siteUrl, source, user, cycle }) {
  const successUrl = new URL('/pricing/', `${siteUrl.replace(/\/+$/, '')}/`)
  successUrl.searchParams.set('paid', 'success')
  if (source === 'app') successUrl.searchParams.set('source', 'app')

  return {
    product_id: productId,
    success_url: successUrl.toString(),
    customer: { email: user.email || undefined },
    metadata: {
      referenceId: user.id,
      cycle,
      source: source === 'app' ? 'app' : 'web'
    }
  }
}

export function isGrantEvent(eventType) {
  return GRANT_EVENTS.has(eventType)
}

export function isRevokeEvent(eventType) {
  return REVOKE_EVENTS.has(eventType)
}

export async function verifyCreemSignature(payload, signature, secret) {
  if (!payload || !signature || !secret) return false
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const digest = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  const expected = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
  return timingSafeEqualHex(expected, signature)
}

function timingSafeEqualHex(a, b) {
  const left = String(a || '').toLowerCase()
  const right = String(b || '').toLowerCase()
  if (left.length !== right.length) return false
  let result = 0
  for (let i = 0; i < left.length; i += 1) result |= left.charCodeAt(i) ^ right.charCodeAt(i)
  return result === 0
}

export async function getSupabaseUser(env, request) {
  const auth = request.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice('Bearer '.length).trim() : ''
  if (!token) throw new Error('missing_auth_token')
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) throw new Error('missing_supabase_env')

  const resp = await fetch(`${env.SUPABASE_URL.replace(/\/+$/, '')}/auth/v1/user`, {
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      authorization: `Bearer ${token}`
    }
  })
  if (!resp.ok) throw new Error('invalid_auth_token')
  const user = await resp.json()
  if (!user?.id) throw new Error('invalid_auth_token')
  return { id: user.id, email: user.email || '' }
}

export async function supabaseAdminFetch(env, path, init = {}) {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) throw new Error('missing_supabase_admin_env')
  return fetch(`${env.SUPABASE_URL.replace(/\/+$/, '')}${path}`, {
    ...init,
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'content-type': 'application/json',
      ...(init.headers || {})
    }
  })
}

export function extractCreemRecord(event) {
  const object = event?.object || event?.data?.object || {}
  const customer = object.customer || object.customerObject || {}
  const subscription = object.subscription || object.subscriptionObject || object
  const metadata = object.metadata || subscription.metadata || object.checkout?.metadata || {}

  return {
    userId: metadata.referenceId || metadata.userId || '',
    email: customer.email || object.email || object.customer_email || '',
    customerId: customer.id || object.customer_id || object.customerId || '',
    subscriptionId: subscription.id || object.subscription_id || object.subscriptionId || '',
    productId: object.product_id || object.productId || object.product?.id || '',
    currentPeriodEnd: subscription.current_period_end_date || subscription.currentPeriodEndDate || subscription.current_period_end || null,
    status: subscription.status || event.eventType || ''
  }
}

export async function upsertSubscription(env, event, isPro) {
  const record = extractCreemRecord(event)
  console.log('[upsert] event keys:', Object.keys(event))
  console.log('[upsert] event.object keys:', event?.object ? Object.keys(event.object) : 'no object')
  console.log('[upsert] event.object.metadata:', JSON.stringify(event?.object?.metadata))
  console.log('[upsert] event.object.customer?.metadata:', JSON.stringify(event?.object?.customer?.metadata))
  console.log('[upsert] extracted record:', JSON.stringify({ ...record, userId: !!record.userId }))
  if (!record.userId) throw new Error('missing_reference_id')

  const body = {
    user_id: record.userId,
    email: record.email,
    creem_customer_id: record.customerId,
    creem_subscription_id: record.subscriptionId,
    creem_product_id: record.productId,
    status: record.status,
    current_period_end: record.currentPeriodEnd,
    is_pro: isPro,
    updated_at: new Date().toISOString()
  }

  const resp = await supabaseAdminFetch(env, '/rest/v1/app_subscriptions?on_conflict=user_id', {
    method: 'POST',
    headers: { prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify(body)
  })
  if (!resp.ok) throw new Error(`supabase_upsert_failed:${resp.status}`)
}
