import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Container from '../ui/Container'
import { useLocale } from '../../context/LocaleContext'
import { isValidRefFormat, REF_PATTERN } from '../../utils/verify'
import { exporterRegisterUrl, withSrc } from '../../config/links'

export default function Hero() {
  const { t, ui } = useLocale()
  const navigate = useNavigate()
  const [ref, setRef] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!ref.trim()) {
      setError(t({ en: 'Enter a certificate reference number.', km: 'សូមបញ្ចូលលេខយោងវិញ្ញាបនបត្រ។' }))
      return
    }
    if (!isValidRefFormat(ref)) {
      setError(
        t({
          en: `Format looks off. Expected something like ${REF_PATTERN}.`,
          km: `ទម្រង់មិនត្រឹមត្រូវ។ ត្រូវតែជា ${REF_PATTERN}។`,
        }),
      )
      return
    }
    setError('')
    navigate(`/verify?ref=${encodeURIComponent(ref.trim().toUpperCase())}`)
  }

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(201,154,70,0.35), transparent 40%), radial-gradient(circle at 85% 0%, rgba(91,150,206,0.25), transparent 45%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 gap-10 py-14 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
        <div className="order-2 flex flex-col gap-6 text-navy-deep-ink md:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[12.5px] font-medium text-navy-deep-ink-soft">
            {t({ en: 'Official platform of the Ministry of Commerce', km: 'វេទិកាផ្លូវការរបស់ក្រសួងពាណិជ្ជកម្ម' })}
          </span>
          <h1 className="text-[32px] font-bold leading-[1.15] text-navy-deep-ink sm:text-[42px] md:text-[46px]">
            {t({
              en: 'Certificates of Origin for Cambodian exporters — issued digitally, verified globally.',
              km: 'វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមសម្រាប់អ្នកនាំចេញកម្ពុជា — ចេញជាឌីជីថល ផ្ទៀងផ្ទាត់បានទូទាំងពិភពលោក។',
            })}
          </h1>
          <p className="max-w-[56ch] text-[16.5px] leading-relaxed text-navy-deep-ink-soft sm:text-[18px]">
            {t({
              en: 'Upload your invoice, let AI read it, pay online, and receive a signed, QR-verifiable e-CO.',
              km: 'ផ្ទុកឡើងវិក្កយបត្ររបស់អ្នក ឱ្យ AI អាន បង់ប្រាក់តាមអនឡាញ រួចទទួលបាន e-CO ដែលបានចុះហត្ថលេខា និងអាចផ្ទៀងផ្ទាត់តាម QR។',
            })}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={exporterRegisterUrl(withSrc())}
              className="rounded-lg bg-gold px-6 py-3 text-[15px] font-semibold text-white shadow-card transition-colors hover:bg-gold-bright"
            >
              {ui('registerExporter')}
            </a>
            <Link
              to="/how-it-works"
              className="rounded-lg border border-white/30 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              {ui('seeHowItWorks')}
            </Link>
          </div>
        </div>

        <div className="order-1 rounded-2xl border border-white/10 bg-surface p-6 shadow-card sm:p-7 md:order-2">
          <h2 className="text-[18px] font-bold text-navy-deep">{ui('verifyCertificate')}</h2>
          <p className="mt-1 text-[13.5px] text-ink-soft">{ui('free')}</p>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2" noValidate>
            <label htmlFor="hero-ref" className="text-[13px] font-semibold text-ink">
              {t({ en: 'Certificate reference number', km: 'លេខយោងវិញ្ញាបនបត្រ' })}
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="hero-ref"
                type="text"
                value={ref}
                onChange={(e) => setRef(e.target.value)}
                placeholder={`e.g. ${REF_PATTERN.replace('YYYY', '2026').replace('XXXXX', '00482')}`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'hero-ref-error' : undefined}
                className="flex-1 rounded-lg border border-border px-3.5 py-3 text-[14.5px] text-ink outline-none focus:border-navy"
              />
              <button
                type="submit"
                className="rounded-lg bg-navy px-5 py-3 text-[14.5px] font-semibold text-white hover:bg-navy-hover"
              >
                {ui('verify')}
              </button>
            </div>
            {error && (
              <p id="hero-ref-error" role="alert" className="text-[13px] font-medium text-danger">
                {error}
              </p>
            )}
            <Link to="/verify#scan" className="mt-1 text-[13.5px] font-medium text-navy hover:underline">
              {ui('scanQr')} →
            </Link>
          </form>
        </div>
      </Container>
    </section>
  )
}
