import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

const SECTIONS = [
  {
    title: { en: '1. Scope', km: '១. វិសាលភាព' },
    body: {
      en: 'These terms govern use of the CamCO public website and its Exporter, Buyer and Freight Forwarder portals, operated by the Ministry of Commerce, Kingdom of Cambodia.',
      km: 'លក្ខខណ្ឌទាំងនេះគ្រប់គ្រងការប្រើប្រាស់គេហទំព័រសាធារណៈ CamCO និងវិបផតថលអ្នកនាំចេញ អ្នកទិញ និងក្រុមហ៊ុនដឹកជញ្ជូន ដែលដំណើរការដោយក្រសួងពាណិជ្ជកម្ម នៃព្រះរាជាណាចក្រកម្ពុជា។',
    },
  },
  {
    title: { en: '2. Accounts', km: '២. គណនី' },
    body: {
      en: 'Exporter and freight forwarder accounts require accurate company information and are subject to Ministry review and approval. You are responsible for keeping your credentials confidential.',
      km: 'គណនីអ្នកនាំចេញ និងក្រុមហ៊ុនដឹកជញ្ជូនតម្រូវឱ្យមានព័ត៌មានក្រុមហ៊ុនត្រឹមត្រូវ ហើយត្រូវពិនិត្យ និងអនុម័តដោយក្រសួង។ អ្នកទទួលខុសត្រូវក្នុងការរក្សាព័ត៌មានសម្ងាត់របស់អ្នកឱ្យមានសុវត្ថិភាព។',
    },
  },
  {
    title: { en: '3. Certificate integrity', km: '៣. ភាពត្រឹមត្រូវនៃវិញ្ញាបនបត្រ' },
    body: {
      en: 'Submitting false or misleading information in a Certificate of Origin application is a serious offence and may result in account suspension and referral to the relevant authorities.',
      km: 'ការដាក់ស្នើព័ត៌មានមិនពិត ឬបំភាន់ក្នុងពាក្យស្នើសុំវិញ្ញាបនបត្របញ្ជាក់ប្រភពដើម គឺជាកំហុសធ្ងន់ធ្ងរ ហើយអាចនាំឱ្យផ្អាកគណនី និងបញ្ជូនទៅអាជ្ញាធរពាក់ព័ន្ធ។',
    },
  },
  {
    title: { en: '4. Fees', km: '៤. ថ្លៃសេវា' },
    body: {
      en: 'Only the fees published on the Fees & Processing Time page apply. Verification is always free. Any request for additional payment should be reported immediately.',
      km: 'មានតែថ្លៃសេវាដែលបានផ្សព្វផ្សាយនៅលើទំព័រថ្លៃសេវា និងរយៈពេលដំណើរការប៉ុណ្ណោះដែលអនុវត្ត។ ការផ្ទៀងផ្ទាត់គឺឥតគិតថ្លៃជានិច្ច។ សំណើសុំបង់ប្រាក់បន្ថែមណាមួយគួរតែត្រូវបានរាយការណ៍ភ្លាមៗ។',
    },
  },
  {
    title: { en: '5. Availability', km: '៥. ភាពអាចប្រើប្រាស់បាន' },
    body: {
      en: 'We aim for high availability but do not guarantee uninterrupted service. Planned maintenance and disruptions are announced on the Announcements page.',
      km: 'យើងព្យាយាមធានាភាពអាចប្រើប្រាស់បានខ្ពស់ ប៉ុន្តែមិនធានានូវសេវាកម្មដែលគ្មានការរំខានទេ។ ការថែទាំដែលបានគ្រោងទុក និងការរំខានត្រូវបានប្រកាសនៅលើទំព័រសេចក្តីប្រកាស។',
    },
  },
  {
    title: { en: '6. Governing law', km: '៦. ច្បាប់អនុវត្ត' },
    body: {
      en: 'These terms are governed by the laws of the Kingdom of Cambodia.',
      km: 'លក្ខខណ្ឌទាំងនេះត្រូវបានគ្រប់គ្រងដោយច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា។',
    },
  },
]

export default function TermsPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero eyebrow={{ en: 'Legal', km: 'ច្បាប់' }} title={{ en: 'Terms of Service', km: 'លក្ខខណ្ឌប្រើប្រាស់' }} />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8">
          {SECTIONS.map((s, i) => (
            <div key={i}>
              <h2 className="text-[17px] font-bold text-navy-deep">{t(s.title)}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t(s.body)}</p>
            </div>
          ))}
          <p className="rounded-xl bg-navy-50 px-4 py-3 text-[12.5px] text-navy-deep">
            {t({
              en: 'Working draft, pending final review and approval by Ministry legal counsel before production launch.',
              km: 'សេចក្តីព្រាងកំពុងធ្វើការ រង់ចាំការពិនិត្យ និងអនុម័តចុងក្រោយពីទីប្រឹក្សាច្បាប់របស់ក្រសួង មុនពេលដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការ។',
            })}
          </p>
        </div>
      </Container>
    </>
  )
}
