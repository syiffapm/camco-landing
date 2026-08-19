// Shared static content for the CamCO public site.
// EN copy follows the reviewed copy deck (spec Bab 7); KM is a working
// translation and, per the spec, needs formal legal/comms sign-off before
// production launch.

export const NAV_ITEMS = [
  { to: '/verify', label: { en: 'Verify', km: 'ផ្ទៀងផ្ទាត់' } },
  { to: '/services', label: { en: 'Services', km: 'សេវាកម្ម' } },
  { to: '/how-it-works', label: { en: 'How It Works', km: 'របៀបប្រើប្រាស់' } },
  { to: '/for-exporters', label: { en: 'For Exporters', km: 'សម្រាប់អ្នកនាំចេញ' } },
  { to: '/for-buyers', label: { en: 'For Buyers', km: 'សម្រាប់អ្នកទិញ' } },
  { to: '/for-freight-forwarders', label: { en: 'For Forwarders', km: 'សម្រាប់អ្នកដឹកជញ្ជូន' } },
  { to: '/help', label: { en: 'Help', km: 'ជំនួយ' } },
]

export const FOOTER_LINKS = {
  platform: [
    { to: '/services', label: { en: 'Services catalogue', km: 'កាតាឡុកសេវាកម្ម' } },
    { to: '/how-it-works', label: { en: 'How it works', km: 'របៀបប្រើប្រាស់' } },
    { to: '/fees', label: { en: 'Fees & processing time', km: 'ថ្លៃសេវា និងរយៈពេល' } },
    { to: '/requirements', label: { en: 'Requirements & documents', km: 'តម្រូវការ និងឯកសារ' } },
    { to: '/announcements', label: { en: 'Announcements', km: 'សេចក្តីប្រកាស' } },
  ],
  audiences: [
    { to: '/for-exporters', label: { en: 'For exporters', km: 'សម្រាប់អ្នកនាំចេញ' } },
    { to: '/for-buyers', label: { en: 'For buyers & importers', km: 'សម្រាប់អ្នកទិញ' } },
    { to: '/for-freight-forwarders', label: { en: 'For freight forwarders', km: 'សម្រាប់អ្នកដឹកជញ្ជូន' } },
    { to: '/about', label: { en: 'About CamCO', km: 'អំពី CamCO' } },
  ],
  legal: [
    { to: '/privacy', label: { en: 'Privacy Policy', km: 'គោលការណ៍ឯកជនភាព' } },
    { to: '/terms', label: { en: 'Terms of Service', km: 'លក្ខខណ្ឌប្រើប្រាស់' } },
    { to: '/accessibility', label: { en: 'Accessibility Statement', km: 'សេចក្តីថ្លែងការណ៍ភាពងាយស្រួល' } },
    { to: '/sitemap', label: { en: 'Sitemap', km: 'ផែនទីគេហទំព័រ' } },
  ],
}

export const STEPS = [
  {
    key: 'upload',
    name: { en: 'Smart Upload', km: 'ផ្ទុកឡើងឆ្លាតវៃ' },
    desc: { en: 'Submit your invoice & packing list; AI reads the key trade data.', km: 'ដាក់ស្នើវិក្កយបត្រ និងបញ្ជីវេចខ្ចប់; AI អានទិន្នន័យពាណិជ្ជកម្មសំខាន់ៗ។' },
    time: { en: '~2 min', km: '~២ នាទី' },
  },
  {
    key: 'validate',
    name: { en: 'Instant Validation', km: 'ការផ្ទៀងផ្ទាត់ភ្លាមៗ' },
    desc: { en: 'HS code and rules-of-origin are checked automatically.', km: 'កូដ HS និងច្បាប់ប្រភពដើមត្រូវបានពិនិត្យស្វ័យប្រវត្តិ។' },
    time: { en: 'Minutes', km: 'ប៉ុន្មាននាទី' },
  },
  {
    key: 'pay',
    name: { en: 'Digital Payment', km: 'ការទូទាត់ឌីជីថល' },
    desc: { en: 'Pay the official fee online — e-Wallet or corporate banking.', km: 'បង់ថ្លៃសេវាផ្លូវការតាមអនឡាញ — កាបូបអេឡិចត្រូនិក ឬធនាគារ។' },
    time: { en: '~1 min', km: '~១ នាទី' },
  },
  {
    key: 'issue',
    name: { en: 'Blockchain Issuance', km: 'ការចេញឯកសារតាមប្លុកឆេន' },
    desc: { en: 'A Ministry officer e-Signs; the certificate is sealed with a QR code.', km: 'មន្ត្រីក្រសួងចុះហត្ថលេខាឌីជីថល; វិញ្ញាបនបត្រត្រូវបានបិទភ្ជាប់ដោយកូដ QR។' },
    time: { en: 'Per SLA', km: 'តាម SLA' },
  },
  {
    key: 'integrate',
    name: { en: 'Ecosystem Integration', km: 'ការភ្ជាប់ប្រព័ន្ធអេកូឡូស៊ី' },
    desc: { en: 'Data is pushed automatically to NSW, Customs and forwarder systems.', km: 'ទិន្នន័យត្រូវបានផ្ញើដោយស្វ័យប្រវត្តិទៅ NSW គយ និងប្រព័ន្ធក្រុមហ៊ុនដឹកជញ្ជូន។' },
    time: { en: 'Automatic', km: 'ស្វ័យប្រវត្តិ' },
  },
]

export const FORMS = [
  { code: 'Form D', dest: { en: 'ATIGA — ASEAN', km: 'ATIGA — អាស៊ាន' } },
  { code: 'Form E', dest: { en: 'China — ASEAN-China FTA', km: 'ចិន — ASEAN-China FTA' } },
  { code: 'Form AK', dest: { en: 'Korea — ASEAN-Korea FTA', km: 'កូរ៉េ — ASEAN-Korea FTA' } },
  { code: 'Form AJ', dest: { en: 'Japan — ASEAN-Japan CEP', km: 'ជប៉ុន — ASEAN-Japan CEP' } },
  { code: 'RCEP', dest: { en: 'RCEP member states', km: 'ប្រទេសសមាជិក RCEP' } },
  { code: 'Form A/REX', dest: { en: 'EU GSP', km: 'EU GSP' } },
  { code: 'Form B', dest: { en: 'Non-preferential, any destination', km: 'មិនមានអនុគ្រោះ គ្រប់ប្រទេសទិសដៅ' } },
]

export const SECURITY_POINTS = [
  {
    title: { en: 'Unique QR per certificate', km: 'កូដ QR តែមួយគត់សម្រាប់វិញ្ញាបនបត្រនីមួយៗ' },
    desc: { en: 'Every certificate carries a one-time QR code linked to its record.', km: 'វិញ្ញាបនបត្រនីមួយៗមានកូដ QR ភ្ជាប់ទៅកំណត់ត្រារបស់វា។' },
  },
  {
    title: { en: 'Integrity fingerprint', km: 'ស្នាមម្រាមដៃភាពត្រឹមត្រូវ' },
    desc: { en: 'Any change to the document content is detected instantly.', km: 'ការផ្លាស់ប្តូរណាមួយចំពោះមាតិកាឯកសារ ត្រូវបានរកឃើញភ្លាមៗ។' },
  },
  {
    title: { en: 'Officer e-Signature', km: 'ហត្ថលេខាឌីជីថលរបស់មន្ត្រី' },
    desc: { en: 'Signed electronically by an authorised Ministry officer.', km: 'ចុះហត្ថលេខាឌីជីថលដោយមន្ត្រីមានសមត្ថកិច្ចរបស់ក្រសួង។' },
  },
  {
    title: { en: 'Full audit trail', km: 'កំណត់ត្រាសវនកម្មពេញលេញ' },
    desc: { en: 'Every action on a certificate is logged and reviewable.', km: 'រាល់សកម្មភាពលើវិញ្ញាបនបត្រត្រូវបានកត់ត្រា និងអាចត្រួតពិនិត្យបាន។' },
  },
]

export const REQUIREMENTS = {
  account: {
    title: { en: 'Before you register', km: 'មុនពេលចុះឈ្មោះ' },
    items: [
      { en: 'Company registration certificate', km: 'វិញ្ញាបនបត្រចុះបញ្ជីក្រុមហ៊ុន' },
      { en: 'VAT / tax identification', km: 'អត្តសញ្ញាណកម្មពន្ធអាករ' },
      { en: 'Authorised signatory ID', km: 'អត្តសញ្ញាណប័ណ្ណអ្នកចុះហត្ថលេខាមានសិទ្ធិ' },
      { en: 'Company contact & address', km: 'ទំនាក់ទំនង និងអាសយដ្ឋានក្រុមហ៊ុន' },
    ],
  },
  submission: {
    title: { en: 'Before you submit a CO', km: 'មុនពេលដាក់ស្នើ CO' },
    items: [
      { en: 'Commercial invoice', km: 'វិក្កយបត្រពាណិជ្ជកម្ម' },
      { en: 'Packing list', km: 'បញ្ជីវេចខ្ចប់' },
      { en: 'Bill of lading / airway bill', km: 'ប័ណ្ណដឹកជញ្ជូន' },
      { en: 'Supporting documents per goods category', km: 'ឯកសារគាំទ្រតាមប្រភេទទំនិញ' },
    ],
  },
}

export const FAQ = [
  {
    q: { en: 'Who can apply for an e-CO?', km: 'តើអ្នកណាអាចដាក់ស្នើសុំ e-CO?' },
    a: { en: 'Any registered Cambodian exporter with a verified company account on the Exporter Portal.', km: 'អ្នកនាំចេញកម្ពុជាដែលបានចុះឈ្មោះ និងមានគណនីក្រុមហ៊ុនដែលបានផ្ទៀងផ្ទាត់នៅលើវិបផតថលអ្នកនាំចេញ។' },
    link: { to: '/for-exporters', label: { en: 'See exporter requirements', km: 'មើលតម្រូវការអ្នកនាំចេញ' } },
  },
  {
    q: { en: 'What documents do I need to prepare?', km: 'តើខ្ញុំត្រូវរៀបចំឯកសារអ្វីខ្លះ?' },
    a: { en: 'A commercial invoice, packing list, bill of lading, and supporting documents for your goods category.', km: 'វិក្កយបត្រពាណិជ្ជកម្ម បញ្ជីវេចខ្ចប់ ប័ណ្ណដឹកជញ្ជូន និងឯកសារគាំទ្រតាមប្រភេទទំនិញ។' },
    link: { to: '/requirements', label: { en: 'Full checklist', km: 'បញ្ជីត្រួតពិនិត្យពេញលេញ' } },
  },
  {
    q: { en: 'How much does it cost and how do I pay?', km: 'តើតម្លៃប៉ុន្មាន ហើយបង់ប្រាក់ដោយរបៀបណា?' },
    a: { en: 'Official tariffs are published transparently by form type; payment is online via e-Wallet or corporate banking.', km: 'អត្រាផ្លូវការត្រូវបានផ្សព្វផ្សាយដោយតម្លាភាពតាមប្រភេទទម្រង់; ការទូទាត់តាមអនឡាញតាមកាបូបអេឡិចត្រូនិក ឬធនាគារ។' },
    link: { to: '/fees', label: { en: 'View fees & SLA', km: 'មើលថ្លៃសេវា និង SLA' } },
  },
  {
    q: { en: 'How long does issuance take?', km: 'តើការចេញឯកសារចំណាយពេលប៉ុន្មាន?' },
    a: { en: 'Most certificates are issued in minutes. Goods requiring inspection take longer — the exact SLA is shown before you submit.', km: 'វិញ្ញាបនបត្រភាគច្រើនត្រូវបានចេញក្នុងរយៈពេលប៉ុន្មាននាទី។ ទំនិញដែលត្រូវការត្រួតពិនិត្យត្រូវការពេលច្រើនជាងនេះ។' },
    link: { to: '/fees', label: { en: 'View SLA', km: 'មើល SLA' } },
  },
  {
    q: { en: 'What form types are supported?', km: 'តើទម្រង់អ្វីខ្លះត្រូវបានគាំទ្រ?' },
    a: { en: 'Form D, E, AK, AJ, RCEP, A/REX (EU GSP), and non-preferential Form B.', km: 'ទម្រង់ D, E, AK, AJ, RCEP, A/REX (EU GSP) និងទម្រង់ B មិនមានអនុគ្រោះ។' },
    link: { to: '/services', label: { en: 'See services catalogue', km: 'មើលកាតាឡុកសេវាកម្ម' } },
  },
  {
    q: { en: 'My goods need inspection — what happens next?', km: 'ទំនិញរបស់ខ្ញុំត្រូវការត្រួតពិនិត្យ — តើបន្ទាប់មកយ៉ាងណា?' },
    a: { en: 'High-risk categories are routed to CamControl for inspection before payment is unlocked; you can track status in the Exporter Portal.', km: 'ប្រភេទហានិភ័យខ្ពស់ត្រូវបញ្ជូនទៅ CamControl ដើម្បីត្រួតពិនិត្យមុនពេលទូទាត់ប្រាក់; អ្នកអាចតាមដានស្ថានភាពនៅលើវិបផតថលអ្នកនាំចេញ។' },
    link: { to: '/how-it-works', label: { en: 'How inspection works', km: 'របៀបដែលការត្រួតពិនិត្យដំណើរការ' } },
  },
  {
    q: { en: 'How does a buyer verify my certificate?', km: 'តើអ្នកទិញផ្ទៀងផ្ទាត់វិញ្ញាបនបត្ររបស់ខ្ញុំដោយរបៀបណា?' },
    a: { en: 'They scan the printed QR code or enter the reference number at /verify — free, instant, no account needed.', km: 'ពួកគេស្កេនកូដ QR ឬបញ្ចូលលេខយោងនៅ /verify — ឥតគិតថ្លៃ ភ្លាមៗ មិនចាំបាច់មានគណនី។' },
    link: { to: '/verify', label: { en: 'Try verification', km: 'សាកល្បងផ្ទៀងផ្ទាត់' } },
  },
  {
    q: { en: 'What happens if my application is rejected or my certificate expires?', km: 'តើមានអ្វីកើតឡើងបើពាក្យស្នើសុំរបស់ខ្ញុំត្រូវបានបដិសេធ ឬវិញ្ញាបនបត្រផុតកំណត់?' },
    a: { en: 'You receive a clear reason and can resubmit with corrections; expired certificates cannot be reissued and require a new application.', km: 'អ្នកនឹងទទួលបានហេតុផលច្បាស់លាស់ និងអាចដាក់ស្នើឡើងវិញបន្ទាប់ពីកែតម្រូវ; វិញ្ញាបនបត្រផុតកំណត់មិនអាចចេញឡើងវិញបានទេ។' },
  },
  {
    q: { en: 'Can I convert a certificate to another form?', km: 'តើខ្ញុំអាចប្តូរវិញ្ញាបនបត្រទៅជាទម្រង់ផ្សេងបានទេ?' },
    a: { en: 'Yes — the retype service reissues an existing certificate to another destination form without re-entering your data.', km: 'បាទ/ចាស — សេវាប្តូរទម្រង់ចេញឯកសារឡើងវិញទៅជាទម្រង់ផ្សេងដោយមិនចាំបាច់បញ្ចូលទិន្នន័យឡើងវិញ។' },
    link: { to: '/services', label: { en: 'See retype service', km: 'មើលសេវាប្តូរទម្រង់' } },
  },
  {
    q: { en: 'Where do I go for help?', km: 'តើខ្ញុំត្រូវទៅណាដើម្បីទទួលបានជំនួយ?' },
    a: { en: 'Our hotline, email, and office address are listed on the Help & Contact page.', km: 'លេខទូរស័ព្ទបន្ទាន់ អ៊ីមែល និងអាសយដ្ឋានការិយាល័យ ត្រូវបានចុះនៅលើទំព័រជំនួយ និងទំនាក់ទំនង។' },
    link: { to: '/help', label: { en: 'Help & Contact', km: 'ជំនួយ និងទំនាក់ទំនង' } },
  },
]

export const STATS = [
  {
    key: 'issued',
    value: '4,812',
    label: { en: 'e-CO issued (last 30 days)', km: 'e-CO ចេញ (៣០ថ្ងៃចុងក្រោយ)' },
  },
  {
    key: 'export-value',
    value: '$186M',
    label: { en: 'Export value covered', km: 'តម្លៃនាំចេញគ្របដណ្តប់' },
  },
  {
    key: 'avg-time',
    value: '18 min',
    label: { en: 'Average issuance time', km: 'រយៈពេលចេញឯកសារជាមធ្យម' },
  },
  {
    key: 'active-exporters',
    value: '1,240',
    label: { en: 'Active exporters', km: 'អ្នកនាំចេញសកម្ម' },
  },
]

export const STATS_NOTE = {
  en: 'Demo data for preview purposes. Figures will cover the last 30 days and refresh daily from the national issuance database once connected.',
  km: 'ទិន្នន័យគំរូសម្រាប់មើលជាមុន។ តួលេខនឹងគ្របដណ្តប់រយៈពេល ៣០ ថ្ងៃចុងក្រោយ និងធ្វើបច្ចុប្បន្នភាពរាល់ថ្ងៃពីមូលដ្ឋានទិន្នន័យជាតិ នៅពេលភ្ជាប់ប្រព័ន្ធរួច។',
}
