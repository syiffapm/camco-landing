import { useEffect } from 'react'
import Container from '../components/ui/Container'
import { useLocale } from '../context/LocaleContext'

/**
 * Verification and buyer sign-in are served by the live Buyer Portal at
 * camcobuyerglobal.linkit360.com, not by this app. This route exists so
 * that /verify, /login etc. never dead-end — anyone who lands here
 * (old bookmark, typed URL) is forwarded immediately.
 */
export default function ExternalRedirect({ to }) {
  const { t } = useLocale()

  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <Container className="flex flex-col items-center gap-3 py-24 text-center">
      <p className="text-[15px] text-ink-soft">{t({ en: 'Redirecting to the Buyer Portal…', km: 'កំពុងបញ្ជូនទៅវិបផតថលអ្នកទិញ…' })}</p>
      <a href={to} className="text-[13.5px] font-semibold text-navy hover:underline">
        {t({ en: 'Click here if you are not redirected automatically', km: 'ចុចទីនេះប្រសិនបើអ្នកមិនត្រូវបានបញ្ជូនដោយស្វ័យប្រវត្តិ' })}
      </a>
    </Container>
  )
}
