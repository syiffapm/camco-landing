// Service -> CTA -> destination, per spec Bab 15.2 (routing contract between
// content and engineering). Each service has exactly one role, one target
// portal and one CTA.
import { exporterNewUrl, exporterRetypeUrl, exporterRegisterUrl, forwarderLoginUrl, buyerVerifyUrl, buyerHomeUrl, withSrc } from '../config/links'

export const SERVICE_ROUTES = {
  'SVC-01': {
    cta: { en: 'Apply for e-CO', km: 'ដាក់ស្នើ e-CO' },
    href: () => exporterNewUrl(withSrc({ svc: 'SVC-01' })),
    external: true,
    fallbackCta: { en: 'Register as Exporter', km: 'ចុះឈ្មោះជាអ្នកនាំចេញ' },
    fallbackHref: () => exporterRegisterUrl(withSrc({ svc: 'SVC-01' })),
  },
  'SVC-02': {
    cta: { en: 'Apply for e-CO (Form B)', km: 'ដាក់ស្នើ e-CO (ទម្រង់ B)' },
    href: () => exporterNewUrl(withSrc({ svc: 'SVC-02', form: 'B' })),
    external: true,
  },
  'SVC-03': {
    cta: { en: 'Try document upload', km: 'សាកល្បងផ្ទុកឡើងឯកសារ' },
    href: () => exporterNewUrl(withSrc({ svc: 'SVC-03' })),
    external: true,
  },
  'SVC-04': {
    cta: { en: 'Learn about validation', km: 'ស្វែងយល់អំពីការផ្ទៀងផ្ទាត់' },
    href: () => '/how-it-works#validation',
    external: false,
  },
  'SVC-05': {
    cta: { en: 'Change certificate format', km: 'ប្តូរទម្រង់វិញ្ញាបនបត្រ' },
    href: () => exporterRetypeUrl(withSrc({ svc: 'SVC-05' })),
    external: true,
  },
  'SVC-06': {
    cta: { en: 'Verify a certificate', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ' },
    href: () => buyerVerifyUrl(withSrc({ svc: 'SVC-06' })),
    external: true,
  },
  'SVC-07': {
    cta: { en: 'Open certificate detail', km: 'បើកព័ត៌មានលម្អិតវិញ្ញាបនបត្រ' },
    href: () => buyerVerifyUrl(withSrc({ svc: 'SVC-07' })),
    external: true,
  },
  'SVC-08': {
    cta: { en: 'Save this certificate', km: 'រក្សាទុកវិញ្ញាបនបត្រនេះ' },
    href: () => buyerHomeUrl(withSrc({ svc: 'SVC-08' })),
    external: true,
  },
  'SVC-09': {
    cta: { en: 'Request forwarder access', km: 'ស្នើសុំចូលប្រើសម្រាប់ក្រុមហ៊ុនដឹកជញ្ជូន' },
    href: () => '/for-freight-forwarders#onboarding',
    external: false,
  },
  'SVC-10': {
    cta: { en: 'View integration docs', km: 'មើលឯកសារភ្ជាប់ប្រព័ន្ធ' },
    href: () => '/for-freight-forwarders#api',
    external: false,
  },
  'SVC-11': {
    cta: { en: 'When inspection is required', km: 'ពេលណាដែលត្រូវការត្រួតពិនិត្យ' },
    href: () => '/how-it-works#inspection',
    external: false,
  },
  'SVC-12': {
    cta: null,
    href: () => null,
    external: false,
  },
}

export { forwarderLoginUrl }
