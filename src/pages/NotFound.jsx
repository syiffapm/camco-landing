import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { useLocale } from '../context/LocaleContext'

export default function NotFound() {
  const { t } = useLocale()
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center">
      <span className="text-[13px] font-semibold uppercase tracking-wide text-gold">404</span>
      <h1 className="text-[26px] font-bold text-navy-deep sm:text-[30px]">
        {t({ en: "We couldn't find that page", km: 'យើងរកមិនឃើញទំព័រនោះទេ' })}
      </h1>
      <p className="max-w-[50ch] text-[15px] text-ink-soft">
        {t({
          en: 'The page may have moved or no longer exists. Try the homepage, or verify a certificate below.',
          km: 'ទំព័រនេះប្រហែលជាបានផ្លាស់ទី ឬលែងមានទៀតហើយ។ សូមសាកល្បងទំព័រដើម ឬផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រខាងក្រោម។',
        })}
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-lg bg-navy px-5 py-2.5 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
          {t({ en: 'Go to homepage', km: 'ទៅទំព័រដើម' })}
        </Link>
        <Link to="/verify" className="rounded-lg border border-navy px-5 py-2.5 text-[14.5px] font-semibold text-navy">
          {t({ en: 'Verify a certificate', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ' })}
        </Link>
      </div>
    </Container>
  )
}
