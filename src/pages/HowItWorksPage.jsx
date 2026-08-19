import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'
import { STEPS } from '../data/content'

const DETAIL_STEPS = [
  {
    key: 'upload',
    who: { en: 'Exporter', km: 'អ្នកនាំចេញ' },
    detail: {
      en: 'Upload your commercial invoice and packing list. Our AI/OCR engine extracts trade data automatically so you rarely retype anything.',
      km: 'ផ្ទុកឡើងវិក្កយបត្រពាណិជ្ជកម្ម និងបញ្ជីវេចខ្ចប់របស់អ្នក។ ម៉ាស៊ីន AI/OCR ស្រង់ទិន្នន័យពាណិជ្ជកម្មដោយស្វ័យប្រវត្តិ។',
    },
  },
  {
    key: 'extract',
    who: { en: 'System', km: 'ប្រព័ន្ធ' },
    detail: { en: 'Extracted fields are shown for you to review and correct before anything is submitted.', km: 'វាលដែលបានស្រង់ត្រូវបានបង្ហាញសម្រាប់អ្នកពិនិត្យ និងកែតម្រូវមុនពេលដាក់ស្នើ។' },
  },
  {
    key: 'validate',
    who: { en: 'System', km: 'ប្រព័ន្ធ' },
    detail: { en: 'HS code and rules-of-origin are validated automatically. Goods in a risk category are routed to inspection.', km: 'កូដ HS និងច្បាប់ប្រភពដើមត្រូវបានផ្ទៀងផ្ទាត់ដោយស្វ័យប្រវត្តិ។ ទំនិញប្រភេទហានិភ័យត្រូវបញ្ជូនទៅត្រួតពិនិត្យ។' },
    id: 'validation',
  },
  {
    key: 'inspect',
    who: { en: 'CamControl (if required)', km: 'CamControl (ប្រសិនបើត្រូវការ)' },
    detail: { en: 'High-risk categories are inspected before payment unlocks. Most applications skip this step entirely.', km: 'ប្រភេទហានិភ័យខ្ពស់ត្រូវបានត្រួតពិនិត្យមុនពេលទូទាត់ប្រាក់។ ពាក្យស្នើសុំភាគច្រើនរំលងជំហាននេះទាំងស្រុង។' },
    id: 'inspection',
  },
  {
    key: 'pay',
    who: { en: 'Exporter', km: 'អ្នកនាំចេញ' },
    detail: { en: 'Pay the official fee via e-Wallet or corporate banking, once all approvals clear.', km: 'បង់ថ្លៃសេវាផ្លូវការតាមកាបូបអេឡិចត្រូនិក ឬធនាគារសាជីវកម្ម បន្ទាប់ពីការអនុម័តទាំងអស់ត្រូវបានបញ្ចប់។' },
  },
  {
    key: 'sign',
    who: { en: 'Ministry officer', km: 'មន្ត្រីក្រសួង' },
    detail: { en: 'An authorised officer reviews and e-Signs the certificate within the published SLA.', km: 'មន្ត្រីមានសមត្ថកិច្ចពិនិត្យ និងចុះហត្ថលេខាឌីជីថលលើវិញ្ញាបនបត្រក្នុងរយៈពេល SLA ដែលបានផ្សព្វផ្សាយ។' },
  },
  {
    key: 'issue',
    who: { en: 'System', km: 'ប្រព័ន្ធ' },
    detail: { en: 'The certificate is issued with a unique QR code and integrity fingerprint, ready to download and share.', km: 'វិញ្ញាបនបត្រត្រូវបានចេញជាមួយកូដ QR តែមួយគត់ និងស្នាមម្រាមដៃភាពត្រឹមត្រូវ ត្រៀមទាញយក និងចែករំលែក។' },
  },
  {
    key: 'integrate',
    who: { en: 'System', km: 'ប្រព័ន្ធ' },
    detail: { en: 'Certificate data syncs automatically to the National Single Window, Customs, and connected forwarder systems.', km: 'ទិន្នន័យវិញ្ញាបនបត្រធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិទៅ National Single Window គយ និងប្រព័ន្ធក្រុមហ៊ុនដឹកជញ្ជូនដែលបានភ្ជាប់។' },
  },
]

export default function HowItWorksPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Process', km: 'ដំណើរការ' }}
        title={{ en: 'How CamCO works, step by step', km: 'របៀបដែល CamCO ដំណើរការ ជាជំហានៗ' }}
        desc={{
          en: 'From an uploaded invoice to an issued, ecosystem-synced e-Certificate of Origin.',
          km: 'ចាប់ពីវិក្កយបត្រដែលបានផ្ទុកឡើង រហូតដល់ e-CO ចេញ និងធ្វើសមកាលកម្មប្រព័ន្ធអេកូឡូស៊ី។',
        }}
      />
      <Container className="py-12 sm:py-16">
        <ol className="flex flex-col gap-6">
          {DETAIL_STEPS.map((step, i) => (
            <li key={step.key} id={step.id} className="flex gap-5 rounded-2xl border border-border-soft bg-surface p-6">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-navy text-[14px] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <span className="text-[11.5px] font-semibold uppercase tracking-wide text-gold">{t(step.who)}</span>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{t(step.detail)}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {STEPS.map((s) => (
            <div key={s.key} className="rounded-xl bg-navy-50 p-4 text-center">
              <span className="text-[13px] font-bold text-navy-deep">{t(s.name)}</span>
              <p className="mt-1 text-[12px] text-ink-faint">{t(s.time)}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
