import AudiencePageTemplate from '../components/audience/AudiencePageTemplate'

const data = {
  key: 'buyers',
  eyebrow: { en: 'For buyers & importers', km: 'សម្រាប់អ្នកទិញ និងអ្នកនាំចូល' },
  title: { en: 'Confirm a certificate is genuine in seconds', km: 'បញ្ជាក់ភាពត្រឹមត្រូវនៃវិញ្ញាបនបត្រក្នុងរយៈពេលប៉ុន្មានវិនាទី' },
  desc: { en: 'No account, no waiting — verification is a public service, always free.', km: 'គ្មានគណនី គ្មានការរង់ចាំ — ការផ្ទៀងផ្ទាត់គឺជាសេវាសាធារណៈ ឥតគិតថ្លៃជានិច្ច។' },
  problem: {
    title: { en: 'The problem today', km: 'បញ្ហាបច្ចុប្បន្ន' },
    text: { en: 'A paper certificate is hard to verify remotely, and counterfeit documents put your shipment and compliance at risk.', km: 'វិញ្ញាបនបត្រជាក្រដាសពិបាកផ្ទៀងផ្ទាត់ពីចម្ងាយ ហើយឯកសារក្លែងក្លាយបង្កហានិភ័យដល់ការដឹកជញ្ជូន និងការអនុលោមភាពរបស់អ្នក។' },
  },
  solution: {
    title: { en: 'How CamCO helps', km: 'របៀបដែល CamCO ជួយ' },
    text: { en: 'Scan the QR code or enter the reference number. The document can be checked instantly, and any change to its content is detected.', km: 'ស្កេនកូដ QR ឬបញ្ចូលលេខយោង។ ឯកសារអាចត្រូវបានពិនិត្យភ្លាមៗ ហើយការផ្លាស់ប្តូរណាមួយចំពោះមាតិកាត្រូវបានរកឃើញ។' },
  },
  benefits: [
    { title: { en: 'Free, always', km: 'ឥតគិតថ្លៃជានិច្ច' }, text: { en: 'Verification never requires an account or payment.', km: 'ការផ្ទៀងផ្ទាត់មិនចាំបាច់មានគណនី ឬបង់ប្រាក់ទេ។' } },
    { title: { en: 'Works from your phone', km: 'ដំណើរការពីទូរស័ព្ទរបស់អ្នក' }, text: { en: 'Scan the printed QR code while holding the physical document.', km: 'ស្កេនកូដ QR ដែលបានបោះពុម្ពខណៈកាន់ឯកសារជាក់ស្តែង។' } },
    { title: { en: 'Keep a watchlist', km: 'រក្សាទុកបញ្ជីតាមដាន' }, text: { en: 'Optionally save certificates and get notified if status changes.', km: 'អាចរក្សាទុកវិញ្ញាបនបត្រ និងទទួលបានការជូនដំណឹងប្រសិនបើស្ថានភាពផ្លាស់ប្តូរ។' } },
  ],
  steps: [
    { en: 'Scan the QR code on the certificate, or open /verify.', km: 'ស្កេនកូដ QR នៅលើវិញ្ញាបនបត្រ ឬបើក /verify។' },
    { en: 'Read the result — valid, expired, revoked, or not found.', km: 'អានលទ្ធផល — ត្រឹមត្រូវ ផុតកំណត់ ដកហូត ឬរកមិនឃើញ។' },
    { en: 'Optionally save it to your Buyer Portal watchlist.', km: 'ស្រេចចិត្តរក្សាទុកទៅក្នុងបញ្ជីតាមដានវិបផតថលអ្នកទិញរបស់អ្នក។' },
  ],
  faq: [
    { q: { en: 'Do I need to register to verify?', km: 'តើខ្ញុំត្រូវចុះឈ្មោះដើម្បីផ្ទៀងផ្ទាត់ទេ?' }, a: { en: 'No — verification is fully public. Registration is only needed to save a watchlist.', km: 'ទេ — ការផ្ទៀងផ្ទាត់គឺជាសាធារណៈពេញលេញ។ ការចុះឈ្មោះត្រូវការតែសម្រាប់រក្សាទុកបញ្ជីតាមដានប៉ុណ្ណោះ។' } },
    { q: { en: 'What exactly does verification confirm?', km: 'តើការផ្ទៀងផ្ទាត់បញ្ជាក់អ្វីខ្លះ?' }, a: { en: 'It confirms the document is genuine and unaltered — not the goods or the underlying transaction.', km: 'វាបញ្ជាក់ថាឯកសារពិតប្រាកដ និងមិនត្រូវបានផ្លាស់ប្តូរ — មិនមែនទំនិញ ឬប្រតិបត្តិការមូលដ្ឋានទេ។' } },
  ],
  cta: {
    title: { en: 'Have a certificate to check?', km: 'មានវិញ្ញាបនបត្រត្រូវពិនិត្យមែនទេ?' },
    text: { en: 'Verify it now — it only takes a moment.', km: 'ផ្ទៀងផ្ទាត់ឥឡូវនេះ — វាចំណាយពេលតែមួយភ្លែត។' },
    label: { en: 'Verify a Certificate', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ' },
    href: '/verify',
    external: false,
  },
}

export default function ForBuyersPage() {
  return <AudiencePageTemplate data={data} />
}
