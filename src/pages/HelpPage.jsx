import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

export default function HelpPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero eyebrow={{ en: 'Help & contact', km: 'ជំនួយ និងទំនាក់ទំនង' }} title={{ en: 'We’re here to help', km: 'យើងនៅទីនេះដើម្បីជួយ' }} />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h2 className="text-[16px] font-bold text-navy-deep">{t({ en: 'Hotline', km: 'លេខទូរស័ព្ទបន្ទាន់' })}</h2>
            <p className="mt-2 text-[18px] font-semibold text-navy">1234 <span className="text-[13px] font-normal text-ink-faint">({t({ en: 'toll-free', km: 'ឥតគិតថ្លៃ' })})</span></p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h2 className="text-[16px] font-bold text-navy-deep">{t({ en: 'Email', km: 'អ៊ីមែល' })}</h2>
            <p className="mt-2 text-[16px] font-semibold text-navy">support@camco.gov.kh</p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h2 className="text-[16px] font-bold text-navy-deep">{t({ en: 'Office hours', km: 'ម៉ោងធ្វើការ' })}</h2>
            <p className="mt-2 text-[15px] text-ink-soft">{t({ en: 'Monday – Friday, 08:00–17:00 (Cambodia time)', km: 'ចន្ទ – សុក្រ ០៨:០០–១៧:០០ (ម៉ោងកម្ពុជា)' })}</p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <h2 className="text-[16px] font-bold text-navy-deep">{t({ en: 'Office address', km: 'អាសយដ្ឋានការិយាល័យ' })}</h2>
            <p className="mt-2 text-[15px] text-ink-soft">{t({ en: 'Ministry of Commerce, Phnom Penh, Kingdom of Cambodia', km: 'ក្រសួងពាណិជ្ជកម្ម ភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា' })}</p>
          </div>
        </div>

        <div className="mt-8 grid aspect-[16/6] place-items-center rounded-2xl border border-dashed border-border bg-navy-50 text-[13px] text-ink-faint">
          {t({ en: 'Static map placeholder', km: 'កន្លែងដាក់ផែនទីស្ថិតិ' })}
        </div>

        <div className="mt-8 rounded-2xl bg-navy-50 p-6 text-[14px] text-navy-deep">
          {t({
            en: 'Being asked to pay a fee not listed on our Fees page? Report it via the hotline or email above.',
            km: 'ត្រូវបានស្នើសុំឱ្យបង់ថ្លៃសេវាដែលមិនមាននៅក្នុងទំព័រថ្លៃសេវារបស់យើងមែនទេ? សូមរាយការណ៍តាមលេខទូរស័ព្ទបន្ទាន់ ឬអ៊ីមែលខាងលើ។',
          })}
        </div>
      </Container>
    </>
  )
}
