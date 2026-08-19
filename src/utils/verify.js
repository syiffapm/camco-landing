// Client-side format check + a deterministic demo verifier.
// There is no backend behind this build yet, so /verify runs a stand-in
// that always returns the same result for the same reference number — it
// exists to demonstrate the four required outcome scenarios (spec 13:
// "menampilkan keempat skenario hasil"), not to check real records.

export const REF_PATTERN = 'KH-CO-YYYY-XXXXX'

export function isValidRefFormat(ref) {
  return /^KH-CO-\d{4}-\d{3,6}$/i.test(ref.trim())
}

function hashString(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

const SAMPLE_ORIGIN = { en: 'Cambodia', km: 'កម្ពុជា' }
const SAMPLE_DEST = { en: 'Vietnam', km: 'វៀតណាម' }

export function demoVerify(rawRef) {
  const ref = rawRef.trim().toUpperCase()

  if (!isValidRefFormat(ref)) {
    return { status: 'invalid_format', ref }
  }

  const bucket = hashString(ref) % 10

  if (bucket < 6) {
    return {
      status: 'valid',
      ref,
      origin: SAMPLE_ORIGIN,
      destination: SAMPLE_DEST,
      form: 'Form D',
      issuedAt: '2026-06-12',
      validUntil: '2027-02-04',
    }
  }
  if (bucket < 8) {
    return { status: 'expired', ref, validUntil: '2026-03-01' }
  }
  if (bucket < 9) {
    return { status: 'revoked', ref, revokedAt: '2026-05-20' }
  }
  return { status: 'not_found', ref }
}
