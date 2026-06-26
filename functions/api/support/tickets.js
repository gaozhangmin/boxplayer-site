import {
  corsHeaders,
  getSupabaseUser,
  jsonResponse,
  supabaseAdminFetch
} from '../../_shared/creem.mjs'
import {
  buildSupportTicketInsert,
  formatSupportTicketNumber,
  validateSupportTicketInput
} from '../../_shared/support.mjs'

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context
    const input = await request.json().catch(() => null)
    if (!input || typeof input !== 'object') return jsonResponse({ error: 'invalid_json' }, { status: 400 })

    const auth = request.headers.get('authorization') || ''
    const hasBearerToken = auth.startsWith('Bearer ')
    const user = hasBearerToken ? await getSupabaseUser(env, request) : null

    const validation = validateSupportTicketInput(input)
    if (!validation.ok) return jsonResponse({ error: validation.error }, { status: 400 })

    const payload = buildSupportTicketInsert(validation.value, user, request)
    const resp = await supabaseAdminFetch(env, '/rest/v1/support_tickets?select=id,ticket_number,status,created_at', {
      method: 'POST',
      headers: { prefer: 'return=representation' },
      body: JSON.stringify(payload)
    })
    const data = await resp.json().catch(() => [])
    if (!resp.ok) return jsonResponse({ error: 'support_ticket_create_failed', detail: data }, { status: resp.status })

    const row = Array.isArray(data) ? data[0] : null
    return jsonResponse({
      ticket: {
        id: row?.id || '',
        number: formatSupportTicketNumber(row?.ticket_number),
        status: row?.status || 'open',
        createdAt: row?.created_at || null
      }
    }, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'support_ticket_failed'
    const status = message.includes('auth') ? 401 : 500
    return jsonResponse({ error: message }, { status })
  }
}
