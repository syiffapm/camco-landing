import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useLocale } from '../../context/LocaleContext'

export default function FeesSummary() {
  const { t } = useLocale()
  return (
    <section className="py-14 sm:py-16">
      <Container className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border-soft bg-surface-2 p-6 sm:p-10 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-3">
          <SectionHeading
            eyebrow={{ en: 'Fees & processing time', km: 'ថ្លៃសេវា និងរយៈពេលដំណើរការ' }}
            title={{ en: 'One official price. No agents, no surprises.', km: 'តម្លៃផ្លូវការមួយ។ គ្មានភ្នាក់ងារ គ្មានការភ្ញាក់ផ្អើល។' }}
          />
          <p className="text-[15px] leading-relaxed text-ink-soft">
            {t({
              en: 'These are the only fees for this service. If you are asked to pay anything else, report it here.',
              km: 'នេះជាថ្លៃសេវាតែមួយគត់សម្រាប់សេវាកម្មនេះ។ ប្រសិនបើអ្នកត្រូវបានស្នើសុំឱ្យបង់ប្រាក់អ្វីផ្សេងទៀត សូមរាយការណ៍នៅទីនេះ។',
            })}
          </p>
          <Link to="/fees" className="mt-1 w-fit rounded-lg bg-navy px-5 py-2.5 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
            {t({ en: 'View fees & SLA', km: 'មើលថ្លៃសេវា និង SLA' })}
          </Link>
        </div>
        <dl className="grid grid-cols-2 gap-4 text-[13.5px]">
          <div className="rounded-xl bg-surface p-4">
            <dt className="font-semibold text-ink-soft">{t({ en: 'Preferential CO', km: 'CO មានអនុគ្រោះ' })}</dt>
            <dd className="mt-1 text-navy-deep">$8</dd>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <dt className="font-semibold text-ink-soft">{t({ en: 'Non-preferential (B)', km: 'មិនមានអនុគ្រោះ (B)' })}</dt>
            <dd className="mt-1 text-navy-deep">$5</dd>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <dt className="font-semibold text-ink-soft">{t({ en: 'Verification', km: 'ការផ្ទៀងផ្ទាត់' })}</dt>
            <dd className="mt-1 text-navy-deep">{t({ en: 'Free', km: 'ឥតគិតថ្លៃ' })}</dd>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <dt className="font-semibold text-ink-soft">{t({ en: 'Typical issuance', km: 'ជាធម្មតាការចេញឯកសារ' })}</dt>
            <dd className="mt-1 text-navy-deep">{t({ en: 'Minutes*', km: 'ប៉ុន្មាននាទី*' })}</dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
