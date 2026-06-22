export function normalizeAuthNextPath(value, fallback = '/pricing/') {
  const allowedPaths = new Set(['/pricing/', '/en/pricing/'])
  const safeFallback = allowedPaths.has(fallback) ? fallback : '/pricing/'
  return typeof value === 'string' && allowedPaths.has(value) ? value : safeFallback
}
