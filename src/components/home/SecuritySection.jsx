import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useLocale } from '../../context/LocaleContext'
import { SECURITY_POINTS } from '../../data/content'

const ICONS = [
  <path key="qr" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3M14 20h7v-3" />,
  <path key="fingerprint" d="M12 2a9 9 0 00-9 9v2a9 9 0 0018 0v-2a9 9 0 00-9-9zM12 8v8M8 10v5M16 10v5" />,
  <path key="sign" d="M4 20h16M6 16l8-8 3 3-8 8H6v-3z" />,
  <path key="audit" d="M9 2h6l1 3h3v2H5V5h3l1-3zM6 7h12l-1 13H7L6 7z" />,
]

export default function SecuritySection() {
  const { t } = useLocale()
  return (
    <section className="bg-navy-deep py-14 text-navy-deep-ink sm:py-16">
      <Container className="flex flex-col gap-8">
        <div className="flex max-w-[62ch] flex-col gap-3">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-bright">
            {t({ en: 'Security & authenticity', km: 'សុវត្ថិភាព និងភាពត្រឹមត្រូវ' })}
          </span>
          <h2 className="text-[28px] font-bold leading-tight text-navy-deep-ink sm:text-[32px]">
            {t({ en: 'Every certificate can be checked, and every change is detected', km: 'វិញ្ញាបនបត្រនីមួយៗអាចត្រូវបានពិនិត្យ ហើយរាល់ការផ្លាស់ប្តូរត្រូវបានរកឃើញ' })}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {SECURITY_POINTS.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-bright" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[i]}
              </svg>
              <h3 className="mt-3 text-[15px] font-bold text-navy-deep-ink">{t(p.title)}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-deep-ink-soft">{t(p.desc)}</p>
            </div>
          ))}
        </div>
        <Link to="/verify" className="w-fit text-[14.5px] font-semibold text-gold-bright hover:underline">
          {t({ en: 'How verification works →', km: 'ការផ្ទៀងផ្ទាត់ដំណើរការយ៉ាងណា →' })}
        </Link>
      </Container>
    </section>
  )
}
