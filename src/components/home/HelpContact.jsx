import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { useLocale } from '../../context/LocaleContext'

const ITEMS = [
  {
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
    title: { en: 'Hotline', km: 'លេខទូរស័ព្ទបន្ទាន់' },
    value: '1234 (toll-free)',
  },
  {
    icon: <path d="M4 4h16v16H4zM22 6l-10 7L2 6" />,
    title: { en: 'Email', km: 'អ៊ីមែល' },
    value: 'support@camco.gov.kh',
  },
  {
    icon: <path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11zM12 13a2 2 0 100-4 2 2 0 000 4z" />,
    title: { en: 'Office hours', km: 'ម៉ោងធ្វើការ' },
    value: { en: 'Mon–Fri, 08:00–17:00', km: 'ចន្ទ–សុក្រ ០៨:០០–១៧:០០' },
  },
]

export default function HelpContact() {
  const { t } = useLocale()
  return (
    <section className="border-t border-border-soft bg-surface-2 py-14 sm:py-16">
      <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-start gap-3.5">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-surface text-navy shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {item.icon}
              </svg>
            </span>
            <div>
              <h3 className="text-[13.5px] font-semibold uppercase tracking-wide text-ink-faint">{t(item.title)}</h3>
              <p className="mt-1 text-[15.5px] font-semibold text-navy-deep">{typeof item.value === 'string' ? item.value : t(item.value)}</p>
            </div>
          </div>
        ))}
      </Container>
      <Container className="mt-8">
        <Link to="/help" className="text-[14.5px] font-semibold text-navy hover:underline">
          {t({ en: 'Full contact details & map →', km: 'ព័ត៌មានទំនាក់ទំនងពេញលេញ និងផែនទី →' })}
        </Link>
      </Container>
    </section>
  )
}
