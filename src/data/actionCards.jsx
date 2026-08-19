// Action-first service cards — "what do you need to do", not "which
// audience are you". Used on the homepage "Services" section and the top
// of /services. Icons are simple line art (spec 2: ilustrasi garis).
import { exporterNewUrl, exporterRetypeUrl, forwarderLoginUrl, buyerVerifyUrl, buyerHomeUrl, withSrc } from '../config/links'

const ICONS = {
  document: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13l2 2 4-4" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 2 20 5v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" />
      <path d="M8.5 12.2l2.3 2.3 4.2-4.6" />
    </>
  ),
  bookmark: (
    <>
      <path d="M6 3h12a1 1 0 011 1v17l-7-4-7 4V4a1 1 0 011-1z" />
      <path d="M9 8h6" />
    </>
  ),
  swap: (
    <>
      <path d="M4 7h13l-3-3M20 17H7l3 3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 16V7a1 1 0 011-1h9v10" />
      <path d="M13 10h4l4 4v2h-2" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.2a2.5 2.5 0 114 2c-.7.6-1.5 1-1.5 2.3" />
      <path d="M12 17h.01" />
    </>
  ),
}

export const ACTION_CARDS = [
  {
    key: 'apply',
    icon: ICONS.document,
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy',
    badge: { en: 'Exporter', km: 'អ្នកនាំចេញ' },
    badgeTone: 'bg-navy-50 text-navy',
    title: { en: 'Apply for a Certificate of Origin', km: 'ដាក់ស្នើសុំវិញ្ញាបនបត្របញ្ជាក់ប្រភពដើម' },
    desc: {
      en: 'Upload your invoice, let AI pre-fill the form, and get your e-CO signed digitally.',
      km: 'ផ្ទុកឡើងវិក្កយបត្ររបស់អ្នក ឱ្យ AI បំពេញទម្រង់ជាមុន រួចទទួលបាន e-CO ចុះហត្ថលេខាឌីជីថល។',
    },
    price: { en: 'From $5', km: 'ចាប់ពី $៥' },
    cta: { en: 'Apply Now', km: 'ដាក់ស្នើឥឡូវនេះ' },
    href: exporterNewUrl(withSrc({ svc: 'SVC-01' })),
    external: true,
  },
  {
    key: 'verify',
    icon: ICONS.shieldCheck,
    iconBg: 'bg-gold-soft',
    iconColor: 'text-gold',
    badge: { en: 'Public · Free', km: 'សាធារណៈ · ឥតគិតថ្លៃ' },
    badgeTone: 'bg-gold-soft text-gold',
    title: { en: 'Verify a Certificate', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ' },
    desc: {
      en: 'Scan a QR code or enter a reference number to confirm authenticity — instantly, no account.',
      km: 'ស្កេនកូដ QR ឬបញ្ចូលលេខយោង ដើម្បីបញ្ជាក់ភាពត្រឹមត្រូវ — ភ្លាមៗ មិនចាំបាច់មានគណនី។',
    },
    cta: { en: 'Verify Now', km: 'ផ្ទៀងផ្ទាត់ឥឡូវនេះ' },
    href: buyerVerifyUrl(withSrc()),
    external: true,
    highlighted: true,
  },
  {
    key: 'save',
    icon: ICONS.bookmark,
    iconBg: 'bg-teal-soft',
    iconColor: 'text-teal',
    badge: { en: 'Buyer', km: 'អ្នកទិញ' },
    badgeTone: 'bg-teal-soft text-teal',
    title: { en: 'Save & Monitor Certificates', km: 'រក្សាទុក និងតាមដានវិញ្ញាបនបត្រ' },
    desc: {
      en: 'Keep a watchlist of certificates you receive and get notified if their status changes.',
      km: 'រក្សាទុកបញ្ជីតាមដានវិញ្ញាបនបត្រដែលអ្នកទទួល ហើយទទួលការជូនដំណឹងនៅពេលស្ថានភាពផ្លាស់ប្តូរ។',
    },
    cta: { en: 'Manage Certificates', km: 'គ្រប់គ្រងវិញ្ញាបនបត្រ' },
    href: buyerHomeUrl(withSrc()),
    external: true,
  },
  {
    key: 'retype',
    icon: ICONS.swap,
    iconBg: 'bg-plum-soft',
    iconColor: 'text-plum',
    badge: { en: 'Exporter', km: 'អ្នកនាំចេញ' },
    badgeTone: 'bg-plum-soft text-plum',
    title: { en: 'Retype to Another Form', km: 'ប្តូរទៅជាទម្រង់ផ្សេង' },
    desc: {
      en: 'Reissue an existing certificate into another destination form — no re-entering data.',
      km: 'ចេញឯកសារឡើងវិញទៅជាទម្រង់ប្រទេសទិសដៅផ្សេង — មិនចាំបាច់បញ្ចូលទិន្នន័យឡើងវិញ។',
    },
    price: { en: 'From $3', km: 'ចាប់ពី $៣' },
    cta: { en: 'Retype Now', km: 'ប្តូរទម្រង់ឥឡូវនេះ' },
    href: exporterRetypeUrl(withSrc({ svc: 'SVC-05' })),
    external: true,
  },
  {
    key: 'forwarder',
    icon: ICONS.truck,
    iconBg: 'bg-danger-soft',
    iconColor: 'text-danger',
    badge: { en: 'Forwarder', km: 'អ្នកដឹកជញ្ជូន' },
    badgeTone: 'bg-danger-soft text-danger',
    title: { en: 'Freight Forwarder Portal', km: 'វិបផតថលក្រុមហ៊ុនដឹកជញ្ជូន' },
    desc: {
      en: 'Onboarded partners retrieve shipment certificate copies and connect via API.',
      km: 'ដៃគូដែលបានចុះឈ្មោះទាញយកច្បាប់ចម្លងវិញ្ញាបនបត្រសម្រាប់ដឹកជញ្ជូន និងភ្ជាប់តាម API។',
    },
    cta: { en: 'Partner Sign-In', km: 'ចូលគណនីដៃគូ' },
    href: forwarderLoginUrl(withSrc()),
    external: true,
  },
  {
    key: 'help',
    icon: ICONS.help,
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy',
    badge: { en: 'Support', km: 'ជំនួយ' },
    badgeTone: 'bg-navy-50 text-navy',
    title: { en: 'Help & FAQ', km: 'ជំនួយ និងសំណួរញឹកញាប់' },
    desc: {
      en: 'Answers to common questions about registration, fees, and regulations.',
      km: 'ចម្លើយចំពោះសំណួរទូទៅអំពីការចុះឈ្មោះ ថ្លៃសេវា និងបទប្បញ្ញត្តិ។',
    },
    cta: { en: 'View FAQ', km: 'មើលសំណួរញឹកញាប់' },
    href: '/faq',
    external: false,
  },
]
