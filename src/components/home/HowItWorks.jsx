import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useLocale } from '../../context/LocaleContext'
import { STEPS } from '../../data/content'

const ICONS = [
  <path key="upload" d="M12 16V4M7 9l5-5 5 5M4 18v1a2 2 0 002 2h12a2 2 0 002-2v-1" />,
  <path key="validate" d="M9 12l2 2 4-4M12 21a9 9 0 100-18 9 9 0 000 18z" />,
  <path key="pay" d="M4 7h16a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1zM3 11h18M7 15h3" />,
  <path key="issue" d="M4 3h12l4 4v14H4zM8 12h8M8 16h5" />,
  <path key="integrate" d="M8 8h8v8H8zM2 8h2M2 16h2M20 8h2M20 16h2M8 2v2M16 2v2M8 20v2M16 20v2" />,
]

export default function HowItWorks() {
  const { t } = useLocale()
  return (
    <section id="how-it-works" className="bg-surface-2 py-14 sm:py-16">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={{ en: 'Process', km: 'ដំណើរការ' }}
          title={{ en: 'How CamCO works', km: 'របៀបដែល CamCO ដំណើរការ' }}
          desc={{
            en: 'Five guided steps from uploaded invoice to an issued, ecosystem-synced e-CO.',
            km: 'ប្រាំជំហានដែលមានការណែនាំ ចាប់ពីវិក្កយបត្រដែលបានផ្ទុកឡើង រហូតដល់ e-CO ចេញ និងធ្វើសមកាលកម្ម។',
          }}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <div key={step.key} className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-surface p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-50 text-navy">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[i]}
                  </svg>
                </span>
                <span className="text-[12px] font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-[15.5px] font-bold text-navy-deep">{t(step.name)}</h3>
              <p className="text-[13.5px] leading-relaxed text-ink-soft">{t(step.desc)}</p>
              <span className="mt-auto text-[12.5px] font-semibold text-ink-faint">{t(step.time)}</span>
            </div>
          ))}
        </div>

        <p className="text-[14px] text-ink-soft">
          {t({
            en: 'Paper-based CO used to take 1–3 days of in-person visits. Most CamCO certificates are issued in minutes — goods requiring inspection take longer.',
            km: 'CO ជាក្រដាសពីមុនត្រូវការពេល ១–៣ ថ្ងៃ ជាមួយនឹងការធ្វើដំណើរផ្ទាល់ខ្លួន។ វិញ្ញាបនបត្រ CamCO ភាគច្រើនត្រូវបានចេញក្នុងរយៈពេលប៉ុន្មាននាទី — ទំនិញដែលត្រូវការត្រួតពិនិត្យត្រូវការពេលច្រើនជាងនេះ។',
          })}
        </p>
      </Container>
    </section>
  )
}
