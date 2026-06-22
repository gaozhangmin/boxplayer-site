import assert from 'node:assert/strict'
import { createHmac } from 'node:crypto'
import test from 'node:test'

import {
  buildCheckoutPayload,
  getProductIdForCycle,
  isGrantEvent,
  isRevokeEvent,
  verifyCreemSignature
} from './creem.mjs'

test('uses the single lifetime product and allows an environment override', () => {
  assert.equal(getProductIdForCycle({}, 'lifetime'), 'prod_7LMyOwuDPbkgzOhkuHXZEH')
  assert.equal(getProductIdForCycle({ CREEM_PRODUCT_ID: 'prod_override' }, 'lifetime'), 'prod_override')
})

test('builds checkout payload with referenceId and app success URL', () => {
  const payload = buildCheckoutPayload({
    productId: 'prod_month',
    siteUrl: 'https://xbysite.pages.dev',
    source: 'app',
    user: { id: 'user_123', email: 'user@example.com' },
    cycle: 'lifetime'
  })

  assert.equal(payload.product_id, 'prod_month')
  assert.equal(payload.success_url, 'https://xbysite.pages.dev/pricing/?paid=success&source=app')
  assert.deepEqual(payload.customer, { email: 'user@example.com' })
  assert.deepEqual(payload.metadata, {
    referenceId: 'user_123',
    cycle: 'lifetime',
    source: 'app'
  })
})

test('maps Creem subscription events to grant and revoke decisions', () => {
  assert.equal(isGrantEvent('checkout.completed'), true)
  assert.equal(isGrantEvent('subscription.paid'), true)
  assert.equal(isGrantEvent('subscription.trialing'), true)
  assert.equal(isGrantEvent('subscription.scheduled_cancel'), false)

  assert.equal(isRevokeEvent('subscription.expired'), true)
  assert.equal(isRevokeEvent('subscription.paused'), true)
  assert.equal(isRevokeEvent('subscription.canceled'), false)
})

test('verifies Creem HMAC signature', async () => {
  const payload = JSON.stringify({ eventType: 'subscription.paid' })
  const secret = 'whsec_test'
  const signature = createHmac('sha256', secret).update(payload).digest('hex')

  assert.equal(await verifyCreemSignature(payload, signature, secret), true)
  assert.equal(await verifyCreemSignature(payload, 'bad-signature', secret), false)
})
