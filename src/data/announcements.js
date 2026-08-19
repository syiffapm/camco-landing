// Demo announcements — for preview only. In production this list is
// managed as CMS content by Admin (spec Bab 11), not hard-coded.
export const ANNOUNCEMENTS = [
  {
    slug: 'rcep-form-live',
    date: '2026-08-10',
    category: { en: 'Service', km: 'សេវាកម្ម' },
    title: {
      en: 'RCEP certificate issuance now live on the Exporter Portal',
      km: 'ការចេញវិញ្ញាបនបត្រ RCEP ដំណើរការហើយនៅលើវិបផតថលអ្នកនាំចេញ',
    },
    excerpt: {
      en: 'Exporters can now apply for RCEP-form Certificates of Origin directly, with the same AI-assisted upload flow as Form D and Form E.',
      km: 'អ្នកនាំចេញអាចដាក់ស្នើវិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមទម្រង់ RCEP បានដោយផ្ទាល់ជាមួយដំណើរការផ្ទុកឡើងដែលមានជំនួយ AI ដូចទម្រង់ D និង E។',
    },
    body: {
      en: 'Starting today, RCEP-form Certificates of Origin can be submitted directly through the Exporter Portal, using the same AI-assisted document upload and HS code validation flow already available for Form D, E, AK and AJ. No new account or additional approval step is required for exporters already registered on the platform.',
      km: 'ចាប់ពីថ្ងៃនេះទៅ វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមទម្រង់ RCEP អាចដាក់ស្នើដោយផ្ទាល់តាមរយៈវិបផតថលអ្នកនាំចេញ ដោយប្រើដំណើរការផ្ទុកឡើងឯកសារ និងផ្ទៀងផ្ទាត់កូដ HS ដែលមានជំនួយ AI ដូចគ្នានឹងទម្រង់ D, E, AK និង AJ។ មិនតម្រូវឱ្យមានគណនីថ្មី ឬជំហានអនុម័តបន្ថែមសម្រាប់អ្នកនាំចេញដែលបានចុះឈ្មោះរួចហើយទេ។',
    },
  },
  {
    slug: 'scheduled-maintenance-aug-24',
    date: '2026-08-05',
    category: { en: 'Disruption', km: 'ការរំខាន' },
    title: {
      en: 'Scheduled maintenance — 24 August, 22:00–00:00 (Cambodia time)',
      km: 'ការថែទាំតាមកាលវិភាគ — ថ្ងៃទី ២៤ សីហា ម៉ោង ២២:០០–០០:០០ (ម៉ោងកម្ពុជា)',
    },
    excerpt: {
      en: 'Certificate issuance and verification will be briefly unavailable during a planned system upgrade.',
      km: 'ការចេញ និងផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រនឹងមិនអាចប្រើប្រាស់បានបណ្តោះអាសន្នកំឡុងពេលធ្វើឱ្យប្រព័ន្ធប្រសើរឡើងតាមផែនការ។',
    },
    body: {
      en: 'CamCO will undergo planned maintenance on 24 August from 22:00 to 00:00 (Cambodia time). During this window, certificate issuance, payment, and public verification at /verify may be briefly unavailable. No submitted applications will be lost. We will post an update here once service is fully restored.',
      km: 'CamCO នឹងធ្វើការថែទាំតាមផែនការនៅថ្ងៃទី ២៤ សីហា ចាប់ពីម៉ោង ២២:០០ ដល់ ០០:០០ (ម៉ោងកម្ពុជា)។ កំឡុងពេលនេះ ការចេញឯកសារ ការទូទាត់ប្រាក់ និងការផ្ទៀងផ្ទាត់សាធារណៈនៅ /verify អាចនឹងមិនអាចប្រើប្រាស់បានបណ្តោះអាសន្ន។ ពាក្យស្នើសុំដែលបានដាក់ស្នើនឹងមិនបាត់បង់ទេ។',
    },
  },
  {
    slug: 'agent-fee-reminder',
    date: '2026-07-22',
    category: { en: 'Regulation', km: 'បទប្បញ្ញត្តិ' },
    title: {
      en: 'Reminder: only the fees listed on camco.gov.kh/fees are official',
      km: 'ចំណាំ៖ មានតែថ្លៃសេវាដែលចុះនៅ camco.gov.kh/fees ប៉ុណ្ណោះដែលជាផ្លូវការ',
    },
    excerpt: {
      en: 'The Ministry reminds exporters that CamCO fees are published transparently and that no third party is authorised to charge additional amounts.',
      km: 'ក្រសួងសូមរំលឹកដល់អ្នកនាំចេញថា ថ្លៃសេវា CamCO ត្រូវបានផ្សព្វផ្សាយដោយតម្លាភាព ហើយគ្មានភាគីទីបីណាមានសិទ្ធិគិតប្រាក់បន្ថែមទេ។',
    },
    body: {
      en: 'Following reports of third parties offering "expedited" CO processing for an unofficial fee, the Ministry reiterates that CamCO\'s published tariff on the Fees & Processing Time page is the only legitimate charge for this service. Exporters asked to pay anything else should report it via the hotline or email on the Help page.',
      km: 'បន្ទាប់ពីមានរបាយការណ៍ថាមានភាគីទីបីស្នើសេវាដំណើរការ CO "ដោយប្រញាប់" ជាថ្លៃមិនផ្លូវការ ក្រសួងសូមបញ្ជាក់ម្តងទៀតថា អត្រាដែលបានផ្សព្វផ្សាយរបស់ CamCO នៅលើទំព័រថ្លៃសេវា និងរយៈពេលដំណើរការ គឺជាការគិតថ្លៃស្របច្បាប់តែមួយគត់សម្រាប់សេវាកម្មនេះ។ អ្នកនាំចេញដែលត្រូវបានស្នើសុំឱ្យបង់ប្រាក់អ្វីផ្សេងទៀត សូមរាយការណ៍តាមលេខទូរស័ព្ទបន្ទាន់ ឬអ៊ីមែលនៅលើទំព័រជំនួយ។',
    },
  },
]
