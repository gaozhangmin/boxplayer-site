import { corsHeaders, isGrantEvent, isRevokeEvent, jsonResponse, upsertSubscription, verifyCreemSignature } from '../../_shared/creem.mjs'

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context
    const payload = await request.text()
    const signature = request.headers.get('creem-signature') || ''
    console.log('[webhook] creem-signature header present:', !!signature)
    console.log('[webhook] CREEM_WEBHOOK_SECRET configured:', !!env.CREEM_WEBHOOK_SECRET)
    const verified = await verifyCreemSignature(payload, signature, env.CREEM_WEBHOOK_SECRET || '')
    if (!verified) {
      console.log('[webhook] signature verification FAILED')
      return jsonResponse({ error: 'invalid_signature' }, { status: 401 })
    }

    const event = JSON.parse(payload)
    const eventType = event.eventType || event.type
    console.log('[webhook] eventType:', eventType)
    console.log('[webhook] has SUPABASE_URL:', !!env.SUPABASE_URL)
    console.log('[webhook] has SUPABASE_SERVICE_ROLE_KEY:', !!env.SUPABASE_SERVICE_ROLE_KEY)
    if (isGrantEvent(eventType)) await upsertSubscription(env, { ...event, eventType }, true)
    else if (isRevokeEvent(eventType)) await upsertSubscription(env, { ...event, eventType }, false)
    else console.log('[webhook] unhandled eventType, skipped')

    return jsonResponse({ received: true })
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : 'webhook_failed' }, { status: 500 })
  }
}
