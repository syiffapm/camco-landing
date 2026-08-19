import Container from '../ui/Container'
import { useLocale } from '../../context/LocaleContext'

const ITEMS = [
  { en: 'Issued by the Ministry of Commerce', km: 'ចេញដោយក្រសួងពាណិជ្ជកម្ម' },
  { en: 'Integrity protected', km: 'ការពារភាពត្រឹមត្រូវ' },
  { en: 'Recognised under ATIGA, RCEP & EU GSP', km: 'ទទួលស្គាល់ក្រោម ATIGA, RCEP និង EU GSP' },
  { en: 'Verification free — no account needed', km: 'ផ្ទៀងផ្ទាត់ឥតគិតថ្លៃ — មិនចាំបាច់មានគណនី' },
]

export default function TrustStrip() {
  const { t } = useLocale()
  return (
    <div className="border-b border-border-soft bg-surface-2 py-3.5">
      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] font-medium text-ink-soft">
        {ITEMS.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-none text-success" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12l4.5 4.5L19 7" />
            </svg>
            {t(item)}
          </span>
        ))}
      </Container>
    </div>
  )
}
