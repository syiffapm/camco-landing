import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'
import { IMAGES } from '../data/images'

const PILLARS = [
  {
    title: { en: 'Eliminating agent dependency', km: 'ការលុបបំបាត់ការពឹងផ្អែកលើភ្នាក់ងារ' },
    text: { en: 'Official fees are published openly, replacing informal broker costs.', km: 'ថ្លៃសេវាផ្លូវការត្រូវបានផ្សព្វផ្សាយបើកចំហ ជំនួសថ្លៃភ្នាក់ងារក្រៅផ្លូវការ។' },
  },
  {
    title: { en: 'Zero counterfeit risk', km: 'គ្មានហានិភ័យក្លែងក្លាយ' },
    text: { en: 'Unique QR codes and an integrity fingerprint make tampering detectable.', km: 'កូដ QR តែមួយគត់ និងស្នាមម្រាមដៃភាពត្រឹមត្រូវ ធ្វើឱ្យការកែប្រែអាចរកឃើញបាន។' },
  },
  {
    title: { en: 'Instant form adjustment', km: 'ការកែសម្រួលទម្រង់ភ្លាមៗ' },
    text: { en: 'Retype an issued certificate into another destination form without re-entering data.', km: 'ប្តូរវិញ្ញាបនបត្រដែលបានចេញទៅជាទម្រង់ប្រទេសទិសដៅផ្សេង ដោយមិនចាំបាច់បញ្ចូលទិន្នន័យឡើងវិញ។' },
  },
  {
    title: { en: 'Ecosystem integration', km: 'ការភ្ជាប់ប្រព័ន្ធអេកូឡូស៊ី' },
    text: { en: 'Certificate data syncs to the National Single Window, Customs, and freight forwarding partners.', km: 'ទិន្នន័យវិញ្ញាបនបត្រធ្វើសមកាលកម្មទៅ National Single Window គយ និងដៃគូដឹកជញ្ជូន។' },
  },
]

export default function AboutPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero
        image={IMAGES.royalPalace}
        eyebrow={{ en: 'About CamCO', km: 'អំពី CamCO' }}
        title={{ en: 'A national platform for digital Certificates of Origin', km: 'វេទិកាជាតិសម្រាប់វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមឌីជីថល' }}
        desc={{
          en: 'CamCO is operated by the Ministry of Commerce, Kingdom of Cambodia, connecting exporters, buyers, freight forwarders and customs authorities in one trusted system.',
          km: 'CamCO ត្រូវបានដំណើរការដោយក្រសួងពាណិជ្ជកម្ម នៃព្រះរាជាណាចក្រកម្ពុជា ដោយភ្ជាប់អ្នកនាំចេញ អ្នកទិញ ក្រុមហ៊ុនដឹកជញ្ជូន និងអាជ្ញាធរគយ ក្នុងប្រព័ន្ធតែមួយដែលអាចទុកចិត្តបាន។',
        }}
      />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-[20px] font-bold text-navy-deep">{t({ en: 'Legal basis', km: 'មូលដ្ឋានច្បាប់' })}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {t({
                en: 'CamCO is established under the authority of the Ministry of Commerce, in coordination with the General Department of Customs and Excise (GDCE) and CamControl, to issue and manage e-Certificates of Origin under Cambodia\'s trade agreements.',
                km: 'CamCO ត្រូវបានបង្កើតឡើងក្រោមសិទ្ធិអំណាចរបស់ក្រសួងពាណិជ្ជកម្ម សហការជាមួយអគ្គនាយកដ្ឋានគយ និងរដ្ឋាករនិងសារពើពន្ធ (GDCE) និង CamControl ដើម្បីចេញ និងគ្រប់គ្រង e-CO ក្រោមកិច្ចព្រមព្រៀងពាណិជ្ជកម្មរបស់កម្ពុជា។',
              })}
            </p>
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-navy-deep">{t({ en: 'System partners', km: 'ដៃគូប្រព័ន្ធ' })}</h2>
            <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink-soft">
              <li>{t({ en: 'General Department of Customs and Excise (GDCE)', km: 'អគ្គនាយកដ្ឋានគយ និងរដ្ឋាករនិងសារពើពន្ធ' })}</li>
              <li>{t({ en: 'CamControl — goods inspection', km: 'CamControl — ការត្រួតពិនិត្យទំនិញ' })}</li>
              <li>{t({ en: 'National Single Window (NSW)', km: 'National Single Window (NSW)' })}</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-14 text-[20px] font-bold text-navy-deep">{t({ en: 'What CamCO is built to change', km: 'អ្វីដែល CamCO ត្រូវបានបង្កើតឡើងដើម្បីផ្លាស់ប្តូរ' })}</h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <div key={i} className="rounded-2xl border border-border-soft bg-surface p-6">
              <h3 className="text-[15.5px] font-bold text-navy-deep">{t(p.title)}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{t(p.text)}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
