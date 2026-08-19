// Client-side format check for the certificate reference number, used by
// the hero's inline quick-verify box before redirecting to the Buyer
// Portal (spec 5.1 "Verifikasi cepat": validate format client-side, then
// hand off with the number pre-filled).

export const REF_PATTERN = 'KH-CO-YYYY-XXXXX'

export function isValidRefFormat(ref) {
  return /^KH-CO-\d{4}-\d{3,6}$/i.test(ref.trim())
}
