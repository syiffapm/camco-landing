import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'
import { SERVICES } from '../data/services'

const BILLABLE = ['SVC-01', 'SVC-02', 'SVC-05', 'SVC-11']

export default function FeesPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero
        eyebrow={{ en: 'Fees & processing time', km: 'ថ្លៃសេវា និងរយៈពេលដំណើរការ' }}
        title={{ en: 'Transparent, official tariffs — no middlemen', km: 'អត្រាផ្លូវការមានតម្លាភាព — គ្មានអន្តរការី' }}
        desc={{
          en: 'Every fee CamCO charges is published here. If anyone asks you to pay something not listed on this page, report it.',
          km: 'ថ្លៃសេវាទាំងអស់ដែល CamCO គិតត្រូវបានផ្សព្វផ្សាយនៅទីនេះ។ ប្រសិនបើនរណាម្នាក់ស្នើសុំឱ្យអ្នកបង់ប្រាក់ដែលមិនមាននៅក្នុងទំព័រនេះ សូមរាយការណ៍។',
        }}
      />
      <Container className="py-12 sm:py-16">
        <div className="overflow-x-auto rounded-2xl border border-border-soft">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="bg-navy-deep text-white">
                <th className="px-4 py-3 font-semibold">{t({ en: 'Service', km: 'សេវាកម្ម' })}</th>
                <th className="px-4 py-3 font-semibold">{t({ en: 'Fee', km: 'ថ្លៃសេវា' })}</th>
                <th className="px-4 py-3 font-semibold">{t({ en: 'SLA', km: 'SLA' })}</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.filter((s) => BILLABLE.includes(s.code)).map((s, i) => (
                <tr key={s.code} className={i % 2 ? 'bg-surface-2' : 'bg-surface'}>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-navy-deep">{s.code}</span> — {t(s.name)}
                  </td>
                  <td className="px-4 py-3 text-ink-soft">{t(s.fee)}</td>
                  <td className="px-4 py-3 text-ink-soft">{t(s.sla)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 rounded-xl bg-navy-50 px-4 py-3 text-[13px] text-navy-deep">
          {t({
            en: 'Demo figures for preview only. Replace with the Ministry\'s official published tariff schedule before production launch.',
            km: 'តួលេខគំរូសម្រាប់មើលជាមុនប៉ុណ្ណោះ។ សូមជំនួសដោយកាលវិភាគអត្រាផ្លូវការរបស់ក្រសួង មុនពេលដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការ។',
          })}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h3 className="text-[15px] font-bold text-navy-deep">{t({ en: 'Payment channels', km: 'ប៉ុស្តិ៍ទូទាត់ប្រាក់' })}</h3>
            <p className="mt-2 text-[14px] text-ink-soft">
              {t({ en: 'Official e-Wallet providers and corporate banking, selected inside the Exporter Portal at checkout.', km: 'អ្នកផ្តល់សេវាកាបូបអេឡិចត្រូនិកផ្លូវការ និងធនាគារសាជីវកម្ម ជ្រើសរើសនៅក្នុងវិបផតថលអ្នកនាំចេញ។' })}
            </p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h3 className="text-[15px] font-bold text-navy-deep">{t({ en: 'Fee waivers', km: 'ការលើកលែងថ្លៃសេវា' })}</h3>
            <p className="mt-2 text-[14px] text-ink-soft">
              {t({ en: 'Published here if and when the Ministry approves a waiver policy for a goods category or exporter tier.', km: 'នឹងផ្សព្វផ្សាយនៅទីនេះ ប្រសិនបើក្រសួងអនុម័តគោលនយោបាយលើកលែងសម្រាប់ប្រភេទទំនិញ ឬកម្រិតអ្នកនាំចេញ។' })}
            </p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h3 className="text-[15px] font-bold text-navy-deep">{t({ en: 'Report overcharging', km: 'រាយការណ៍ការគិតលើសថ្លៃ' })}</h3>
            <p className="mt-2 text-[14px] text-ink-soft">
              {t({ en: 'Contact our hotline or email immediately — see the Help page for details.', km: 'សូមទាក់ទងលេខទូរស័ព្ទបន្ទាន់ ឬអ៊ីមែលភ្លាមៗ — សូមមើលទំព័រជំនួយសម្រាប់ព័ត៌មានលម្អិត។' })}
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
