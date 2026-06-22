import { corsHeaders, getSupabaseUser, jsonResponse, supabaseAdminFetch } from '../../_shared/creem.mjs'

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function onRequestGet(context) {
  try {
    const user = await getSupabaseUser(context.env, context.request)
    const resp = await supabaseAdminFetch(
      context.env,
      `/rest/v1/app_subscriptions?user_id=eq.${encodeURIComponent(user.id)}&select=is_pro,status,current_period_end&limit=1`,
      { method: 'GET' }
    )
    if (!resp.ok) return jsonResponse({ error: 'subscription_lookup_failed' }, { status: resp.status })
    const rows = await resp.json()
    const sub = rows[0] || null
    return jsonResponse({
      isPro: Boolean(sub?.is_pro),
      status: sub?.status || 'free',
      currentPeriodEnd: sub?.current_period_end || null
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'subscription_failed'
    const status = message.includes('auth') ? 401 : 500
    return jsonResponse({ error: message }, { status })
  }
}
