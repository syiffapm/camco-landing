import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

/**
 * Buyer sign-in lives on this same domain (see config/links.js note) — a
 * light account, no company legality documents, per spec SVC-08.
 */
export default function BuyerLoginPage() {
  const { t } = useLocale()
  const [params] = useSearchParams()
  const returnTo = params.get('return')

  return (
    <>
      <PageHero eyebrow={{ en: 'Buyer Portal', km: 'វិបផតថលអ្នកទិញ' }} title={{ en: 'Sign in to save & monitor certificates', km: 'ចូលប្រើដើម្បីរក្សាទុក និងតាមដានវិញ្ញាបនបត្រ' }} />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-[420px] rounded-2xl border border-border-soft bg-surface p-8">
          {returnTo && (
            <p className="mb-4 rounded-lg bg-navy-50 px-3 py-2 text-[12.5px] text-navy-deep">
              {t({ en: 'After signing in you\'ll return to your certificate.', km: 'បន្ទាប់ពីចូលប្រើ អ្នកនឹងត្រលប់ទៅវិញ្ញាបនបត្ររបស់អ្នក។' })}
            </p>
          )}
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="buyer-email" className="text-[13px] font-semibold text-ink">
                {t({ en: 'Email', km: 'អ៊ីមែល' })}
              </label>
              <input id="buyer-email" type="email" required className="rounded-lg border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-navy" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="buyer-password" className="text-[13px] font-semibold text-ink">
                {t({ en: 'Password', km: 'ពាក្យសម្ងាត់' })}
              </label>
              <input id="buyer-password" type="password" required className="rounded-lg border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-navy" />
            </div>
            <button type="submit" className="mt-1 rounded-lg bg-navy px-5 py-3 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
              {t({ en: 'Sign in', km: 'ចូលប្រើប្រាស់' })}
            </button>
          </form>
          <p className="mt-5 text-center text-[13.5px] text-ink-soft">
            {t({ en: "Don't have an account?", km: 'មិនទាន់មានគណនីមែនទេ?' })}{' '}
            <Link to="/register-buyer" className="font-semibold text-navy hover:underline">
              {t({ en: 'Register — no company documents needed', km: 'ចុះឈ្មោះ — មិនចាំបាច់មានឯកសារក្រុមហ៊ុន' })}
            </Link>
          </p>
        </div>
      </Container>
    </>
  )
}
