import AudiencePageTemplate from '../components/audience/AudiencePageTemplate'
import OnboardingRequestForm from '../components/audience/OnboardingRequestForm'
import Container from '../components/ui/Container'
import { useLocale } from '../context/LocaleContext'
import { forwarderLoginUrl } from '../config/links'
import { withSrc } from '../config/links'

const data = {
  key: 'forwarders',
  eyebrow: { en: 'For freight forwarders', km: 'សម្រាប់ក្រុមហ៊ុនដឹកជញ្ជូន' },
  title: { en: 'Skip the loket — access certificates directly', km: 'រំលងកន្លែងទទួលឯកសារ — ចូលប្រើវិញ្ញាបនបត្រដោយផ្ទាល់' },
  desc: { en: 'Onboarded partners get read-only access to shipment documents, always in sync with the issuing exporter.', km: 'ដៃគូដែលបានចុះឈ្មោះទទួលបានសិទ្ធិចូលប្រើឯកសារដឹកជញ្ជូនសម្រាប់អានតែប៉ុណ្ណោះ ត្រូវគ្នាជានិច្ចជាមួយអ្នកនាំចេញ។' },
  problem: {
    title: { en: 'The problem today', km: 'បញ្ហាបច្ចុប្បន្ន' },
    text: { en: 'Picking up physical CO copies means trips to a counter and manual reconciliation with your own systems.', km: 'ការទទួលច្បាប់ចម្លង CO ជាក់ស្តែងមានន័យថាការធ្វើដំណើរទៅកន្លែងទទួល និងការផ្ទៀងផ្ទាត់ដោយដៃជាមួយប្រព័ន្ធរបស់អ្នក។' },
  },
  solution: {
    title: { en: 'How CamCO helps', km: 'របៀបដែល CamCO ជួយ' },
    text: { en: 'Once onboarded, retrieve certificate copies and QR codes directly, or connect via API to sync into your ERP automatically.', km: 'នៅពេលបានចុះឈ្មោះរួច ទាញយកច្បាប់ចម្លងវិញ្ញាបនបត្រ និងកូដ QR ដោយផ្ទាល់ ឬភ្ជាប់តាម API ដើម្បីធ្វើសមកាលកម្មទៅ ERP របស់អ្នកដោយស្វ័យប្រវត្តិ។' },
  },
  benefits: [
    { title: { en: 'Under a minute', km: 'ក្រោមមួយនាទី' }, text: { en: 'Certificates appear in your portal within a minute of issuance.', km: 'វិញ្ញាបនបត្រលេចឡើងក្នុងវិបផតថលរបស់អ្នកក្នុងរយៈពេលមួយនាទីបន្ទាប់ពីចេញ។' } },
    { title: { en: 'API & webhooks', km: 'API និង webhook' }, text: { en: 'Sync certificate data into your own ERP and customs systems.', km: 'ធ្វើសមកាលកម្មទិន្នន័យវិញ្ញាបនបត្រទៅ ERP និងប្រព័ន្ធគយផ្ទាល់ខ្លួនរបស់អ្នក។' } },
    { title: { en: 'Always current', km: 'ទាន់សម័យជានិច្ច' }, text: { en: 'Read-only access stays in sync with the issuing exporter automatically.', km: 'សិទ្ធិចូលប្រើសម្រាប់អានតែប៉ុណ្ណោះ ត្រូវគ្នាជានិច្ចជាមួយអ្នកនាំចេញដោយស្វ័យប្រវត្តិ។' } },
  ],
  steps: [
    { en: 'Submit an access request with your company details and the exporters you work with.', km: 'ដាក់ស្នើសំណើចូលប្រើជាមួយព័ត៌មានក្រុមហ៊ុន និងអ្នកនាំចេញដែលអ្នកសហការជាមួយ។' },
    { en: 'The Ministry reviews and approves your onboarding.', km: 'ក្រសួងពិនិត្យ និងអនុម័តការចុះឈ្មោះរបស់អ្នក។' },
    { en: 'Accept the invitation email and set your password.', km: 'ទទួលយកអ៊ីមែលអញ្ជើញ ហើយកំណត់ពាក្យសម្ងាត់របស់អ្នក។' },
    { en: 'Sign in to the Freight Forwarder Portal.', km: 'ចូលទៅវិបផតថលក្រុមហ៊ុនដឹកជញ្ជូន។' },
  ],
  faq: [
    { q: { en: 'Can I self-register as a forwarder?', km: 'តើខ្ញុំអាចចុះឈ្មោះដោយខ្លួនឯងជាក្រុមហ៊ុនដឹកជញ្ជូនបានទេ?' }, a: { en: 'No — forwarder accounts are created through Ministry-reviewed onboarding, not self-registration.', km: 'ទេ — គណនីក្រុមហ៊ុនដឹកជញ្ជូនត្រូវបានបង្កើតតាមរយៈការចុះឈ្មោះដែលក្រសួងពិនិត្យ មិនមែនការចុះឈ្មោះដោយខ្លួនឯងទេ។' } },
  ],
  cta: {
    title: { en: 'Already onboarded?', km: 'បានចុះឈ្មោះរួចហើយមែនទេ?' },
    text: { en: 'Sign in to the Freight Forwarder Portal.', km: 'ចូលទៅវិបផតថលក្រុមហ៊ុនដឹកជញ្ជូន។' },
    label: { en: 'Partner Sign In', km: 'ចូលគណនីដៃគូ' },
    href: forwarderLoginUrl(withSrc({ from: 'for-freight-forwarders' })),
    external: true,
  },
}

function ApiTeaser() {
  const { t } = useLocale()
  return (
    <section id="api" className="py-14 sm:py-16">
      <Container className="rounded-2xl border border-border-soft bg-surface p-8">
        <h2 className="text-[20px] font-bold text-navy-deep">{t({ en: 'Integration documentation', km: 'ឯកសារភ្ជាប់ប្រព័ន្ធ' })}</h2>
        <p className="mt-2 max-w-[64ch] text-[14.5px] leading-relaxed text-ink-soft">
          {t({
            en: 'API keys, webhook events, and payload references become available inside the Freight Forwarder Portal once your account is active.',
            km: 'API key ព្រឹត្តិការណ៍ webhook និងឯកសារយោង payload នឹងអាចប្រើបានក្នុងវិបផតថលក្រុមហ៊ុនដឹកជញ្ជូន នៅពេលគណនីរបស់អ្នកសកម្ម។',
          })}
        </p>
      </Container>
    </section>
  )
}

export default function ForFreightForwardersPage() {
  return (
    <>
      <AudiencePageTemplate data={data} />
      <OnboardingRequestForm />
      <ApiTeaser />
    </>
  )
}
