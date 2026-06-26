const TYPE_VALUES = new Set(['bug', 'feature'])
const LOCALE_VALUES = new Set(['zh', 'en'])

function readString(input, key, maxLength) {
  const value = input?.[key]
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function isEmail(value) {
  if (!value) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function formatSupportTicketNumber(value) {
  const number = Number(value)
  if (!Number.isFinite(number) || number <= 0) return ''
  return `BP-${String(number).padStart(6, '0')}`
}

export function validateSupportTicketInput(input) {
  const type = readString(input, 'type', 24).toLowerCase()
  const title = readString(input, 'title', 160)
  const description = readString(input, 'description', 5000)
  const contactEmail = readString(input, 'contactEmail', 254)
  const appVersion = readString(input, 'appVersion', 80)
  const platform = readString(input, 'platform', 120)
  const reproductionSteps = readString(input, 'reproductionSteps', 3000)
  const expectedBehavior = readString(input, 'expectedBehavior', 2000)
  const localeInput = readString(input, 'locale', 8).toLowerCase()
  const sourceInput = readString(input, 'source', 24).toLowerCase()

  if (!TYPE_VALUES.has(type)) return { ok: false, error: 'invalid_ticket_type' }
  if (title.length < 4) return { ok: false, error: 'title_too_short' }
  if (description.length < 10) return { ok: false, error: 'description_too_short' }
  if (!isEmail(contactEmail)) return { ok: false, error: 'invalid_contact_email' }

  return {
    ok: true,
    value: {
      type,
      title,
      description,
      contactEmail,
      appVersion,
      platform,
      reproductionSteps,
      expectedBehavior,
      locale: LOCALE_VALUES.has(localeInput) ? localeInput : 'zh',
      source: sourceInput === 'app' ? 'app' : 'web'
    }
  }
}

export function buildSupportTicketInsert(ticket, user, request) {
  const headers = request?.headers
  return {
    type: ticket.type,
    title: ticket.title,
    description: ticket.description,
    contact_email: ticket.contactEmail || user?.email || null,
    app_version: ticket.appVersion || null,
    platform: ticket.platform || null,
    reproduction_steps: ticket.reproductionSteps || null,
    expected_behavior: ticket.expectedBehavior || null,
    locale: ticket.locale,
    source: ticket.source,
    user_id: user?.id || null,
    account_email: user?.email || null,
    user_agent: headers?.get?.('user-agent')?.slice(0, 500) || null
  }
}
