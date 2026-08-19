import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useLocale } from '../../context/LocaleContext'
import { IMAGES } from '../../data/images'

const TABS = [
  {
    key: 'exporters',
    label: { en: 'Exporters', km: 'អ្នកនាំចេញ' },
    title: { en: 'Apply, track and download your e-CO', km: 'ដាក់ស្នើ តាមដាន និងទាញយក e-CO របស់អ្នក' },
    image: IMAGES.port,
    imageCaption: { en: 'Sihanoukville Autonomous Port', km: 'កំពង់ផែស្វយ័តព្រះសីហនុ' },
    benefits: [
      { en: 'AI reads your invoice — no manual retyping', km: 'AI អានវិក្កយបត្ររបស់អ្នក — មិនចាំបាច់វាយបញ្ចូលឡើងវិញ' },
      { en: 'Track approval status in real time', km: 'តាមដានស្ថានភាពអនុម័តតាមពេលវេលាជាក់ស្តែង' },
      { en: 'Reissue to another form without re-entering data', km: 'ចេញឯកសារឡើងវិញទៅទម្រង់ផ្សេងដោយមិនចាំបាច់បញ្ចូលទិន្នន័យឡើងវិញ' },
    ],
    cta: { to: '/for-exporters', label: { en: 'For Exporters', km: 'សម្រាប់អ្នកនាំចេញ' } },
  },
  {
    key: 'buyers',
    label: { en: 'Buyers & Importers', km: 'អ្នកទិញ និងអ្នកនាំចូល' },
    title: { en: 'Verify authenticity in seconds', km: 'ផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវក្នុងរយៈពេលប៉ុន្មានវិនាទី' },
    image: IMAGES.angkorWat,
    imageCaption: { en: 'Angkor Wat, Siem Reap', km: 'អង្គរវត្ត សៀមរាប' },
    benefits: [
      { en: 'Scan a QR code or type the reference number', km: 'ស្កេនកូដ QR ឬវាយបញ្ចូលលេខយោង' },
      { en: 'No account required to verify', km: 'មិនចាំបាច់មានគណនីដើម្បីផ្ទៀងផ្ទាត់' },
      { en: 'Optionally save certificates to a watchlist', km: 'អាចរក្សាទុកវិញ្ញាបនបត្រទៅក្នុងបញ្ជីតាមដាន' },
    ],
    cta: { to: '/for-buyers', label: { en: 'For Buyers', km: 'សម្រាប់អ្នកទិញ' } },
  },
  {
    key: 'forwarders',
    label: { en: 'Freight Forwarders', km: 'ក្រុមហ៊ុនដឹកជញ្ជូន' },
    title: { en: 'Access shipment documents & integrate systems', km: 'ចូលប្រើឯកសារដឹកជញ្ជូន និងភ្ជាប់ប្រព័ន្ធ' },
    image: IMAGES.port,
    imageCaption: { en: 'Sihanoukville Autonomous Port', km: 'កំពង់ផែស្វយ័តព្រះសីហនុ' },
    benefits: [
      { en: 'Onboarded partners retrieve certificate copies instantly', km: 'ដៃគូដែលបានចុះឈ្មោះទាញយកច្បាប់ចម្លងភ្លាមៗ' },
      { en: 'API & webhook to sync into your ERP', km: 'API និង webhook សម្រាប់ធ្វើសមកាលកម្មទៅ ERP របស់អ្នក' },
      { en: 'Always in sync with the issuing exporter', km: 'ត្រូវគ្នាជានិច្ចជាមួយអ្នកនាំចេញដែលចេញឯកសារ' },
    ],
    cta: { to: '/for-freight-forwarders', label: { en: 'For Forwarders', km: 'សម្រាប់អ្នកដឹកជញ្ជូន' } },
  },
]

export default function AudienceTabs() {
  const [active, setActive] = useState(0)
  const { t } = useLocale()
  const tab = TABS[active]

  return (
    <section className="bg-surface-2 py-14 sm:py-16">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={{ en: 'Who it’s for', km: 'សម្រាប់អ្នកណា' }}
          title={{ en: 'One platform, built around your role', km: 'វេទិកាមួយ សាងសង់ជុំវិញតួនាទីរបស់អ្នក' }}
        />

        <div role="tablist" aria-label="Audience" className="flex w-fit flex-wrap gap-1 rounded-xl border border-border-soft bg-surface p-1">
          {TABS.map((tb, i) => (
            <button
              key={tb.key}
              role="tab"
              type="button"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-lg px-4 py-2.5 text-[14px] font-semibold transition-colors ${
                active === i ? 'bg-navy text-white' : 'text-ink-soft hover:text-navy'
              }`}
            >
              {t(tb.label)}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="grid grid-cols-1 gap-8 rounded-2xl border border-border-soft bg-surface p-6 sm:p-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold text-navy-deep">{t(tab.title)}</h3>
            <ul className="flex flex-col gap-3">
              {tab.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-success" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4.5 4.5L19 7" />
                  </svg>
                  {t(b)}
                </li>
              ))}
            </ul>
            <Link to={tab.cta.to} className="mt-2 w-fit rounded-lg bg-navy px-5 py-2.5 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
              {t(tab.cta.label)}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img src={tab.image} alt={t(tab.imageCaption)} className="h-full w-full object-cover" loading="lazy" />
            <span className="absolute bottom-3 left-3 rounded-md bg-navy-deep/80 px-2.5 py-1 text-[11.5px] font-medium text-white backdrop-blur-sm">
              {t(tab.imageCaption)}
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
