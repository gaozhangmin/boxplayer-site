import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildSupportTicketInsert,
  formatSupportTicketNumber,
  validateSupportTicketInput
} from './support.mjs'

test('validates an anonymous bug ticket', () => {
  const result = validateSupportTicketInput({
    type: 'bug',
    title: 'Book reader crashes',
    description: 'Opening an EPUB and switching pages closes the reader.',
    contactEmail: '',
    appVersion: '4.0.53',
    platform: 'macOS',
    locale: 'en'
  })

  assert.equal(result.ok, true)
  assert.equal(result.value.type, 'bug')
  assert.equal(result.value.contactEmail, '')
  assert.equal(result.value.locale, 'en')
})

test('rejects missing required support ticket fields', () => {
  assert.deepEqual(validateSupportTicketInput({ type: 'question', title: 'abcd', description: 'long enough text' }), { ok: false, error: 'invalid_ticket_type' })
  assert.deepEqual(validateSupportTicketInput({ type: 'bug', title: 'abc', description: 'long enough text' }), { ok: false, error: 'title_too_short' })
  assert.deepEqual(validateSupportTicketInput({ type: 'bug', title: 'valid title', description: 'short' }), { ok: false, error: 'description_too_short' })
  assert.deepEqual(validateSupportTicketInput({ type: 'bug', title: 'valid title', description: 'long enough text', contactEmail: 'bad-email' }), { ok: false, error: 'invalid_contact_email' })
})

test('builds an insert payload with optional authenticated user data', () => {
  const validation = validateSupportTicketInput({
    type: 'feature',
    title: 'Add subtitle sync presets',
    description: 'Please add reusable subtitle delay presets for common files.',
    contactEmail: '',
    source: 'web'
  })
  const request = new Request('https://example.com/api/support/tickets', {
    headers: { 'user-agent': 'node-test' }
  })

  const payload = buildSupportTicketInsert(validation.value, { id: 'user-1', email: 'user@example.com' }, request)

  assert.equal(payload.type, 'feature')
  assert.equal(payload.contact_email, 'user@example.com')
  assert.equal(payload.user_id, 'user-1')
  assert.equal(payload.account_email, 'user@example.com')
  assert.equal(payload.user_agent, 'node-test')
})

test('formats ticket numbers for user-facing confirmation', () => {
  assert.equal(formatSupportTicketNumber(7), 'BP-000007')
  assert.equal(formatSupportTicketNumber('42'), 'BP-000042')
  assert.equal(formatSupportTicketNumber(null), '')
})
