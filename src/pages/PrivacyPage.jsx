import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

const SECTIONS = [
  {
    title: { en: '1. What we collect', km: '១. អ្វីដែលយើងប្រមូល' },
    body: {
      en: 'For public verification, we process only the certificate reference number or QR code you submit — no personal data is required. Registered users (exporters, buyers, freight forwarders) provide company and contact details needed to operate their account.',
      km: 'សម្រាប់ការផ្ទៀងផ្ទាត់សាធារណៈ យើងដំណើរការតែលេខយោងវិញ្ញាបនបត្រ ឬកូដ QR ដែលអ្នកបញ្ជូន — មិនតម្រូវទិន្នន័យផ្ទាល់ខ្លួនទេ។ អ្នកប្រើប្រាស់ដែលបានចុះឈ្មោះផ្តល់ព័ត៌មានក្រុមហ៊ុន និងទំនាក់ទំនងចាំបាច់សម្រាប់ដំណើរការគណនីរបស់ពួកគេ។',
    },
  },
  {
    title: { en: '2. How we use it', km: '២. របៀបដែលយើងប្រើប្រាស់វា' },
    body: {
      en: 'Data is used to issue, verify and audit Certificates of Origin, to operate exporter/buyer/forwarder accounts, and to meet legal and customs record-keeping obligations.',
      km: 'ទិន្នន័យត្រូវបានប្រើដើម្បីចេញ ផ្ទៀងផ្ទាត់ និងធ្វើសវនកម្មវិញ្ញាបនបត្របញ្ជាក់ប្រភពដើម ដំណើរការគណនីអ្នកនាំចេញ/អ្នកទិញ/ក្រុមហ៊ុនដឹកជញ្ជូន និងបំពេញកាតព្វកិច្ចរក្សាកំណត់ត្រាតាមច្បាប់ និងគយ។',
    },
  },
  {
    title: { en: '3. Who we share it with', km: '៣. អ្នកណាដែលយើងចែករំលែកជាមួយ' },
    body: {
      en: 'Certificate data syncs automatically with the National Single Window and Customs systems as required by law. We do not sell personal data, and we do not use third-party advertising trackers.',
      km: 'ទិន្នន័យវិញ្ញាបនបត្រធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិជាមួយ National Single Window និងប្រព័ន្ធគយ តាមតម្រូវការច្បាប់។ យើងមិនលក់ទិន្នន័យផ្ទាល់ខ្លួន ហើយមិនប្រើកម្មវិធីតាមដានផ្សាយពាណិជ្ជកម្មភាគីទីបីទេ។',
    },
  },
  {
    title: { en: '4. Cookies & analytics', km: '៤. Cookies និងការវិភាគ' },
    body: {
      en: 'Privacy-respecting analytics may be used to understand site usage. A consent banner is shown only if non-essential cookies are in use.',
      km: 'ការវិភាគដែលគោរពឯកជនភាពអាចត្រូវបានប្រើដើម្បីយល់ពីការប្រើប្រាស់គេហទំព័រ។ ផ្ទាំងសម្រេចចិត្តត្រូវបានបង្ហាញតែពេលមាន cookie មិនចាំបាច់ត្រូវបានប្រើប្រាស់ប៉ុណ្ណោះ។',
    },
  },
  {
    title: { en: '5. Your rights', km: '៥. សិទ្ធិរបស់អ្នក' },
    body: {
      en: 'You may request access to, correction of, or deletion of your account data by contacting our support channels on the Help page, subject to legal retention requirements for issued certificates.',
      km: 'អ្នកអាចស្នើសុំចូលប្រើ កែតម្រូវ ឬលុបទិន្នន័យគណនីរបស់អ្នក ដោយទាក់ទងបណ្តាញជំនួយរបស់យើងនៅលើទំព័រជំនួយ ដោយអនុលោមតាមតម្រូវការរក្សាទុកតាមច្បាប់សម្រាប់វិញ្ញាបនបត្រដែលបានចេញ។',
    },
  },
]

export default function PrivacyPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero eyebrow={{ en: 'Legal', km: 'ច្បាប់' }} title={{ en: 'Privacy Policy', km: 'គោលការណ៍ឯកជនភាព' }} />
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
