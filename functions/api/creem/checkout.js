import { buildCheckoutPayload, corsHeaders, getCreemApiBase, getProductIdForCycle, getSiteUrl, getSupabaseUser, jsonResponse } from '../../_shared/creem.mjs'

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context
    if (!env.CREEM_API_KEY) return jsonResponse({ error: 'missing_creem_api_key' }, { status: 500 })

    const input = await request.json().catch(() => ({}))
    const cycle = 'lifetime'
    const source = input.source === 'app' ? 'app' : 'web'
    const productId = getProductIdForCycle(env, cycle)
    if (!productId) return jsonResponse({ error: 'missing_creem_product_id' }, { status: 500 })

    const user = await getSupabaseUser(env, request)
    const payload = buildCheckoutPayload({
      productId,
      siteUrl: getSiteUrl(env, request.url),
      source,
      user,
      cycle
    })

    const resp = await fetch(`${getCreemApiBase(env.CREEM_API_KEY)}/v1/checkouts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.CREEM_API_KEY
      },
      body: JSON.stringify(payload)
    })
    const data = await resp.json().catch(() => ({}))
    if (!resp.ok) return jsonResponse({ error: 'creem_checkout_failed', detail: data.message || data.error || data }, { status: resp.status })

    const checkoutUrl = data.checkout_url || data.checkoutUrl || data.url
    if (!checkoutUrl) return jsonResponse({ error: 'missing_checkout_url' }, { status: 502 })
    return jsonResponse({ checkoutUrl })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'checkout_failed'
    const status = message.includes('auth') ? 401 : 500
    return jsonResponse({ error: message }, { status })
  }
}
