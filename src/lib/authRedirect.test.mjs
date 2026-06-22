import assert from 'node:assert/strict'
import test from 'node:test'
import { normalizeAuthNextPath } from './authRedirect.mjs'

test('accepts localized internal pricing paths', () => {
  assert.equal(normalizeAuthNextPath('/pricing/'), '/pricing/')
  assert.equal(normalizeAuthNextPath('/en/pricing/'), '/en/pricing/')
})

test('rejects external and protocol-relative redirects', () => {
  assert.equal(normalizeAuthNextPath('https://example.com'), '/pricing/')
  assert.equal(normalizeAuthNextPath('//example.com/path'), '/pricing/')
  assert.equal(normalizeAuthNextPath('/\\example.com/path'), '/pricing/')
  assert.equal(normalizeAuthNextPath('/account/'), '/pricing/')
  assert.equal(normalizeAuthNextPath('javascript:alert(1)'), '/pricing/')
})

test('uses a caller-provided localized fallback', () => {
  assert.equal(normalizeAuthNextPath(null, '/en/pricing/'), '/en/pricing/')
})
