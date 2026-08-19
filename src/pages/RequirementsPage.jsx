import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'
import { REQUIREMENTS } from '../data/content'

function Checklist({ block }) {
  const { t } = useLocale()
  return (
    <div className="rounded-2xl border border-border-soft bg-surface p-6">
      <h3 className="text-[17px] font-bold text-navy-deep">{t(block.title)}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none rounded border border-border" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true" />
            {t(it)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function RequirementsPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Requirements & documents', km: 'តម្រូវការ និងឯកសារ' }}
        title={{ en: 'What to prepare before you start', km: 'អ្វីដែលត្រូវរៀបចំមុនចាប់ផ្តើម' }}
      />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Checklist block={REQUIREMENTS.account} />
          <Checklist block={REQUIREMENTS.submission} />
        </div>

        <div className="mt-8 rounded-2xl border border-border-soft bg-surface-2 p-6">
          <h3 className="text-[15px] font-bold text-navy-deep">{t({ en: 'Accepted file formats', km: 'ទម្រង់ឯកសារដែលទទួលយក' })}</h3>
          <p className="mt-2 text-[14px] text-ink-soft">
            {t({ en: 'PDF, JPG or PNG, up to 10 MB per file. Scans should be legible at 100% zoom.', km: 'PDF, JPG ឬ PNG រហូតដល់ ១០ MB ក្នុងមួយឯកសារ។ ការស្កេនគួរតែអានច្បាស់នៅកម្រិតពង្រីក ១០០%។' })}
          </p>
        </div>

        <p className="mt-6 text-[13px] text-ink-faint">
          {t({
            en: 'A bilingual PDF guide will be linked here once published by the Ministry.',
            km: 'ការណែនាំជា PDF ពីរភាសានឹងភ្ជាប់នៅទីនេះ នៅពេលដែលក្រសួងផ្សព្វផ្សាយ។',
          })}
        </p>
      </Container>
    </>
  )
}
