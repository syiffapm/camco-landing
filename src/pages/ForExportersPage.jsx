import AudiencePageTemplate from '../components/audience/AudiencePageTemplate'
import { exporterRegisterUrl, withSrc } from '../config/links'

const data = {
  key: 'exporters',
  eyebrow: { en: 'For exporters', km: 'សម្រាប់អ្នកនាំចេញ' },
  title: { en: 'Get your Certificate of Origin without the queue', km: 'ទទួលបានវិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមដោយមិនចាំបាច់តម្រង់ជួរ' },
  desc: {
    en: 'Everything a Cambodian exporter needs to know before registering.',
    km: 'អ្វីគ្រប់យ៉ាងដែលអ្នកនាំចេញកម្ពុជាត្រូវដឹងមុនពេលចុះឈ្មោះ។',
  },
  problem: {
    title: { en: 'The problem today', km: 'បញ្ហាបច្ចុប្បន្ន' },
    text: {
      en: 'Paper-based CO applications mean in-person visits, manual data entry, and unpredictable turnaround — sometimes 1–3 days.',
      km: 'ការដាក់ស្នើ CO ជាក្រដាសមានន័យថាការធ្វើដំណើរផ្ទាល់ខ្លួន ការបញ្ចូលទិន្នន័យដោយដៃ និងរយៈពេលមិនប្រាកដប្រជា — ពេលខ្លះ ១–៣ ថ្ងៃ។',
    },
  },
  solution: {
    title: { en: 'How CamCO helps', km: 'របៀបដែល CamCO ជួយ' },
    text: {
      en: 'Upload your invoice once — AI extracts the data, the system validates HS codes and rules of origin, and most certificates are issued in minutes.',
      km: 'ផ្ទុកឡើងវិក្កយបត្រម្តង — AI ស្រង់ទិន្នន័យ ប្រព័ន្ធផ្ទៀងផ្ទាត់កូដ HS និងច្បាប់ប្រភពដើម ហើយវិញ្ញាបនបត្រភាគច្រើនត្រូវបានចេញក្នុងរយៈពេលប៉ុន្មាននាទី។',
    },
  },
  benefits: [
    { title: { en: 'Minutes, not days', km: 'ប៉ុន្មាននាទី មិនមែនប៉ុន្មានថ្ងៃ' }, text: { en: 'Most preferential and non-preferential CO are issued the same day.', km: 'CO មានអនុគ្រោះ និងមិនមានអនុគ្រោះភាគច្រើនត្រូវបានចេញនៅថ្ងៃដដែល។' } },
    { title: { en: 'One upload, seven forms', km: 'ផ្ទុកឡើងម្តង ទម្រង់ប្រាំពីរ' }, text: { en: 'Retype into another destination form instantly, no new application.', km: 'ប្តូរទៅទម្រង់ប្រទេសទិសដៅផ្សេងភ្លាមៗ គ្មានពាក្យស្នើសុំថ្មី។' } },
    { title: { en: 'Track every status', km: 'តាមដានគ្រប់ស្ថានភាព' }, text: { en: 'See validation, inspection, payment and signature status in one place.', km: 'មើលស្ថានភាពការផ្ទៀងផ្ទាត់ ត្រួតពិនិត្យ ទូទាត់ប្រាក់ និងហត្ថលេខានៅកន្លែងតែមួយ។' } },
  ],
  steps: [
    { en: 'Prepare your company legality documents.', km: 'រៀបចំឯកសារបញ្ជាក់ភាពស្របច្បាប់របស់ក្រុមហ៊ុន។' },
    { en: 'Register on the Exporter Portal and verify your email.', km: 'ចុះឈ្មោះនៅលើវិបផតថលអ្នកនាំចេញ ហើយផ្ទៀងផ្ទាត់អ៊ីមែលរបស់អ្នក។' },
    { en: 'Wait for account approval (status shown honestly, with ETA).', km: 'រង់ចាំការអនុម័តគណនី (ស្ថានភាពបង្ហាញយ៉ាងច្បាស់ ជាមួយពេលវេលាប៉ាន់ស្មាន)។' },
    { en: 'Upload your first invoice and submit your application.', km: 'ផ្ទុកឡើងវិក្កយបត្រដំបូងរបស់អ្នក ហើយដាក់ស្នើពាក្យស្នើសុំ។' },
  ],
  faq: [
    { q: { en: 'Do I need a company account to apply?', km: 'តើខ្ញុំត្រូវការគណនីក្រុមហ៊ុនដើម្បីដាក់ស្នើទេ?' }, a: { en: 'Yes — CO issuance always requires a verified Exporter Portal account.', km: 'បាទ/ចាស — ការចេញ CO តែងតែត្រូវការគណនីវិបផតថលអ្នកនាំចេញដែលបានផ្ទៀងផ្ទាត់។' } },
    { q: { en: 'What if my goods need inspection?', km: 'បើទំនិញរបស់ខ្ញុំត្រូវការត្រួតពិនិត្យ តើយ៉ាងណា?' }, a: { en: 'High-risk categories route to CamControl automatically; payment unlocks once inspection clears.', km: 'ប្រភេទហានិភ័យខ្ពស់ត្រូវបញ្ជូនទៅ CamControl ដោយស្វ័យប្រវត្តិ; ការទូទាត់ប្រាក់នឹងបើកនៅពេលការត្រួតពិនិត្យបញ្ចប់។' } },
  ],
  cta: {
    title: { en: 'Ready to register?', km: 'ត្រៀមចុះឈ្មោះហើយឬនៅ?' },
    text: { en: 'Create your Exporter Portal account today.', km: 'បង្កើតគណនីវិបផតថលអ្នកនាំចេញរបស់អ្នកថ្ងៃនេះ។' },
    label: { en: 'Register as Exporter', km: 'ចុះឈ្មោះជាអ្នកនាំចេញ' },
    href: exporterRegisterUrl(withSrc({ from: 'for-exporters' })),
    external: true,
  },
}

export default function ForExportersPage() {
  return <AudiencePageTemplate data={data} />
}
