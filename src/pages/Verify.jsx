import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'
import { demoVerify, isValidRefFormat, REF_PATTERN } from '../utils/verify'
import { withSrc } from '../config/links'

const STATUS_STYLE = {
  valid: { bg: 'bg-success-soft', text: 'text-success', label: { en: 'Valid', km: 'ត្រឹមត្រូវ' } },
  expired: { bg: 'bg-warn-soft', text: 'text-warn', label: { en: 'Expired', km: 'ផុតកំណត់' } },
  revoked: { bg: 'bg-danger-soft', text: 'text-danger', label: { en: 'Revoked', km: 'បានដកហូត' } },
  not_found: { bg: 'bg-surface-2', text: 'text-ink-faint', label: { en: 'Not found', km: 'រកមិនឃើញ' } },
}

function ResultCard({ result }) {
  const { t } = useLocale()
  if (result.status === 'invalid_format') return null
  const style = STATUS_STYLE[result.status]

  return (
    <div className="mt-6 rounded-2xl border border-border-soft bg-surface p-6">
      <span className="text-[11.5px] font-semibold uppercase tracking-wide text-ink-faint">
        {t({ en: 'Demo result — for illustration only', km: 'លទ្ធផលគំរូ — សម្រាប់បង្ហាញតែប៉ុណ្ណោះ' })}
      </span>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13.5px] font-semibold ${style.bg} ${style.text}`}>
          {t(style.label)}
        </span>
        <span className="font-mono text-[14px] text-ink-soft">{result.ref}</span>
      </div>

      {result.status === 'valid' && (
        <dl className="mt-5 grid grid-cols-2 gap-4 text-[14px] sm:grid-cols-4">
          <div>
            <dt className="text-ink-faint">{t({ en: 'Origin', km: 'ប្រភពដើម' })}</dt>
            <dd className="font-semibold text-navy-deep">{t(result.origin)}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">{t({ en: 'Destination', km: 'ប្រទេសទិសដៅ' })}</dt>
            <dd className="font-semibold text-navy-deep">{t(result.destination)}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">{t({ en: 'Form type', km: 'ប្រភេទទម្រង់' })}</dt>
            <dd className="font-semibold text-navy-deep">{result.form}</dd>
          </div>
          <div>
            <dt className="text-ink-faint">{t({ en: 'Valid until', km: 'សុពលភាពដល់' })}</dt>
            <dd className="font-semibold text-navy-deep">{result.validUntil}</dd>
          </div>
        </dl>
      )}

      {result.status === 'expired' && (
        <p className="mt-4 text-[14px] text-ink-soft">
          {t({ en: 'This certificate expired on', km: 'វិញ្ញាបនបត្រនេះបានផុតកំណត់នៅថ្ងៃ' })} <strong>{result.validUntil}</strong>.{' '}
          {t({ en: 'It can no longer be used for customs clearance.', km: 'វាមិនអាចប្រើសម្រាប់ការឆ្លងកាត់គយបានទៀតទេ។' })}
        </p>
      )}

      {result.status === 'revoked' && (
        <p className="mt-4 text-[14px] text-ink-soft">
          {t({ en: 'This certificate was revoked on', km: 'វិញ្ញាបនបត្រនេះត្រូវបានដកហូតនៅថ្ងៃ' })} <strong>{result.revokedAt}</strong>.{' '}
          {t({ en: 'Contact the issuing exporter or the Ministry for details.', km: 'សូមទាក់ទងអ្នកនាំចេញដែលចេញឯកសារ ឬក្រសួង សម្រាប់ព័ត៌មានលម្អិត។' })}
        </p>
      )}

      {result.status === 'not_found' && (
        <p className="mt-4 text-[14px] text-ink-soft">
          {t({
            en: 'No certificate matches this reference number. Double-check the number, or contact the exporter who issued it.',
            km: 'គ្មានវិញ្ញាបនបត្រត្រូវនឹងលេខយោងនេះទេ។ សូមពិនិត្យលេខម្តងទៀត ឬទាក់ទងអ្នកនាំចេញដែលបានចេញឯកសារ។',
          })}
        </p>
      )}

      <p className="mt-5 border-t border-border-soft pt-4 text-[12.5px] text-ink-faint">
        {t({
          en: 'Verification confirms the document — not the goods or the underlying transaction.',
          km: 'ការផ្ទៀងផ្ទាត់បញ្ជាក់ឯកសារ — មិនមែនទំនិញ ឬប្រតិបត្តិការមូលដ្ឋានទេ។',
        })}
      </p>
    </div>
  )
}

export default function Verify() {
  const { t, ui } = useLocale()
  const [params, setParams] = useSearchParams()
  const [mode, setMode] = useState('number')
  const [ref, setRef] = useState(params.get('ref') || '')
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [cameraNote, setCameraNote] = useState('')

  useEffect(() => {
    const initial = params.get('ref')
    if (initial) {
      runVerify(initial)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function runVerify(value) {
    if (!value.trim()) {
      setError(t({ en: 'Enter a certificate reference number.', km: 'សូមបញ្ចូលលេខយោងវិញ្ញាបនបត្រ។' }))
      setResult(null)
      return
    }
    if (!isValidRefFormat(value)) {
      setError(t({ en: `Format looks off. Expected something like ${REF_PATTERN}.`, km: `ទម្រង់មិនត្រឹមត្រូវ។ ត្រូវតែជា ${REF_PATTERN}។` }))
      setResult(null)
      return
    }
    setError('')
    setResult(demoVerify(value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setParams(withSrc({ ref: ref.trim().toUpperCase() }))
    runVerify(ref)
  }

  async function handleOpenCamera() {
    setCameraNote('')
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraNote(
        t({
          en: 'Camera access is not available on this device/browser. Enter the reference number manually instead.',
          km: 'ការចូលប្រើកាមេរ៉ាមិនអាចប្រើបានលើឧបករណ៍/កម្មវិធីរុករកនេះទេ។ សូមបញ្ចូលលេខយោងដោយដៃជំនួសវិញ។',
        }),
      )
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      stream.getTracks().forEach((tr) => tr.stop())
      setCameraNote(
        t({
          en: 'Camera access granted. QR auto-scan is coming soon — please enter the reference number manually for now.',
          km: 'បានអនុញ្ញាតឱ្យប្រើកាមេរ៉ា។ ការស្កេន QR ស្វ័យប្រវត្តិនឹងមកដល់ឆាប់ៗនេះ — សូមបញ្ចូលលេខយោងដោយដៃសិន។',
        }),
      )
    } catch {
      setCameraNote(
        t({
          en: 'Camera permission was denied. Enter the reference number manually below.',
          km: 'ការអនុញ្ញាតកាមេរ៉ាត្រូវបានបដិសេធ។ សូមបញ្ចូលលេខយោងដោយដៃខាងក្រោម។',
        }),
      )
    }
  }

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Public service', km: 'សេវាសាធារណៈ' }}
        title={{ en: 'Verify a Certificate of Origin', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើម' }}
        desc={{
          en: 'Free, instant, and open to anyone — exporters, buyers, freight forwarders and customs officers. No account needed.',
          km: 'ឥតគិតថ្លៃ ភ្លាមៗ និងបើកចំហសម្រាប់អ្នកគ្រប់គ្នា — អ្នកនាំចេញ អ្នកទិញ ក្រុមហ៊ុនដឹកជញ្ជូន និងមន្ត្រីគយ។ មិនចាំបាច់មានគណនី។',
        }}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-[640px]">
          <div role="tablist" aria-label="Verify by" className="flex w-fit gap-1 rounded-xl border border-border-soft bg-surface-2 p-1">
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'number'}
              onClick={() => setMode('number')}
              className={`rounded-lg px-4 py-2 text-[14px] font-semibold ${mode === 'number' ? 'bg-navy text-white' : 'text-ink-soft'}`}
            >
              {t({ en: 'Reference number', km: 'លេខយោង' })}
            </button>
            <button
              type="button"
              role="tab"
              id="scan"
              aria-selected={mode === 'qr'}
              onClick={() => setMode('qr')}
              className={`rounded-lg px-4 py-2 text-[14px] font-semibold ${mode === 'qr' ? 'bg-navy text-white' : 'text-ink-soft'}`}
            >
              {ui('scanQr')}
            </button>
          </div>

          {mode === 'number' ? (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2" noValidate>
              <label htmlFor="verify-ref" className="text-[13.5px] font-semibold text-ink">
                {t({ en: 'Certificate reference number', km: 'លេខយោងវិញ្ញាបនបត្រ' })}
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="verify-ref"
                  type="text"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                  placeholder="e.g. KH-CO-2026-00482"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'verify-ref-error' : undefined}
                  className="flex-1 rounded-lg border border-border px-3.5 py-3 text-[15px] text-ink outline-none focus:border-navy"
                />
                <button type="submit" className="rounded-lg bg-navy px-6 py-3 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
                  {ui('verify')}
                </button>
              </div>
              <p className="text-[12.5px] text-ink-faint">{ui('free')}</p>
              {error && (
                <p id="verify-ref-error" role="alert" className="text-[13px] font-medium text-danger">
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border p-8 text-center">
              <svg viewBox="0 0 24 24" className="h-10 w-10 text-navy" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h3v3M14 21h7v-4" />
              </svg>
              <p className="max-w-[38ch] text-[14px] text-ink-soft">
                {t({ en: 'Use your device camera to scan the QR code printed on a certificate.', km: 'ប្រើកាមេរ៉ាឧបករណ៍របស់អ្នកដើម្បីស្កេនកូដ QR ដែលបានបោះពុម្ពនៅលើវិញ្ញាបនបត្រ។' })}
              </p>
              <button type="button" onClick={handleOpenCamera} className="rounded-lg bg-navy px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-navy-hover">
                {ui('scanQr')}
              </button>
              {cameraNote && (
                <p role="status" className="max-w-[38ch] text-[13px] text-warn">
                  {cameraNote}
                </p>
              )}
              <button type="button" onClick={() => setMode('number')} className="text-[13.5px] font-semibold text-navy hover:underline">
                {t({ en: 'Enter reference number instead', km: 'បញ្ចូលលេខយោងជំនួសវិញ' })}
              </button>
            </div>
          )}

          {result && <ResultCard result={result} />}

          <p className="mt-8 text-[13px] text-ink-faint">
            {t({ en: 'Need help with a certificate?', km: 'ត្រូវការជំនួយពាក់ព័ន្ធនឹងវិញ្ញាបនបត្រមែនទេ?' })}{' '}
            <Link to="/help" className="font-semibold text-navy hover:underline">
              {t({ en: 'Contact us', km: 'ទាក់ទងយើងខ្ញុំ' })}
            </Link>
          </p>
        </div>
      </Container>
    </>
  )
}
