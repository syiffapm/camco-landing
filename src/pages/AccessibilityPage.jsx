import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

const FEATURES = [
  { en: 'Text resize control (A / A+) in the top bar, without breaking layout', km: 'ឧបករណ៍ពង្រីកអក្សរ (A / A+) នៅរបារខាងលើ ដោយមិនធ្វើឱ្យប្លង់ខូច' },
  { en: 'Full keyboard operability with a visible focus indicator', km: 'អាចប្រើប្រាស់ពេញលេញតាមក្តារចុច ជាមួយសញ្ញាបង្ហាញការផ្តោតអារម្មណ៍ច្បាស់លាស់' },
  { en: '"Skip to main content" link as the first focusable element', km: 'តំណភ្ជាប់ "រំលងទៅមាតិកាសំខាន់" ជាធាតុដំបូងដែលអាចផ្តោតបាន' },
  { en: 'Semantic landmarks and a single H1 per page', km: 'សញ្ញាសំគាល់ semantic និង H1 មួយក្នុងមួយទំព័រ' },
  { en: 'Contrast of at least 4.5:1 for normal text', km: 'កម្រិតផ្ទុយគ្នាយ៉ាងតិច ៤.៥:១ សម្រាប់អក្សរធម្មតា' },
  { en: 'Respect for prefers-reduced-motion', km: 'គោរពការកំណត់ prefers-reduced-motion' },
]

export default function AccessibilityPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Accessibility', km: 'ភាពងាយស្រួល' }}
        title={{ en: 'Accessibility Statement', km: 'សេចក្តីថ្លែងការណ៍ភាពងាយស្រួល' }}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8">
          <div>
            <h2 className="text-[17px] font-bold text-navy-deep">{t({ en: 'Conformance target', km: 'គោលដៅអនុលោមភាព' })}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {t({
                en: 'CamCO is built to conform to WCAG 2.1 Level AA, the standard required for Cambodian government websites.',
                km: 'CamCO ត្រូវបានសាងសង់ឡើងដើម្បីអនុលោមតាម WCAG 2.1 កម្រិត AA ជាស្តង់ដារដែលតម្រូវសម្រាប់គេហទំព័ររដ្ឋាភិបាលកម្ពុជា។',
              })}
            </p>
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-navy-deep">{t({ en: 'What we\'ve built in', km: 'អ្វីដែលយើងបានដាក់បញ្ចូល' })}</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-success" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l4.5 4.5L19 7" />
                  </svg>
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-navy-deep">{t({ en: 'Known limitations', km: 'កម្រិតកំណត់ដែលដឹង' })}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {t({
                en: 'This build is an early draft: automatic QR scanning, some inner pages, and the Khmer translation are still in progress. A full manual keyboard-navigation audit is pending before production launch.',
                km: 'កំណែនេះជាសេចក្តីព្រាងដំបូង៖ ការស្កេន QR ស្វ័យប្រវត្តិ ទំព័រខ្លះខាងក្នុង និងការបកប្រែជាភាសាខ្មែរ នៅតែកំពុងដំណើរការ។ ការត្រួតពិនិត្យការរុករកតាមក្តារចុចដោយដៃពេញលេញ នៅរង់ចាំមុនពេលដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការ។',
              })}
            </p>
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-navy-deep">{t({ en: 'Report an accessibility issue', km: 'រាយការណ៍បញ្ហាភាពងាយស្រួល' })}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {t({ en: 'Contact us via the Help page — accessibility reports are prioritised.', km: 'ទាក់ទងយើងខ្ញុំតាមទំព័រជំនួយ — របាយការណ៍ភាពងាយស្រួលត្រូវបានផ្តល់អាទិភាព។' })}
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
