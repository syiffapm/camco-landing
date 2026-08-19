import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

export default function BuyerRegisterPage() {
  const { t } = useLocale()
  const [params] = useSearchParams()
  const returnTo = params.get('return')
  const [done, setDone] = useState(false)

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Buyer Portal', km: 'វិបផតថលអ្នកទិញ' }}
        title={{ en: 'Light registration for buyers', km: 'ការចុះឈ្មោះស្រាលៗសម្រាប់អ្នកទិញ' }}
        desc={{ en: 'Just your email and company name — no legality documents required.', km: 'គ្រាន់តែអ៊ីមែល និងឈ្មោះក្រុមហ៊ុនរបស់អ្នក — មិនតម្រូវឯកសារបញ្ជាក់ភាពស្របច្បាប់ទេ។' }}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-[420px] rounded-2xl border border-border-soft bg-surface p-8">
          {done ? (
            <div className="text-center">
              <p className="text-[15px] text-ink">
                {t({
                  en: 'Check your email to verify your account. Once verified, you\'ll be able to save certificates.',
                  km: 'សូមពិនិត្យអ៊ីមែលរបស់អ្នកដើម្បីផ្ទៀងផ្ទាត់គណនី។ នៅពេលបានផ្ទៀងផ្ទាត់ អ្នកនឹងអាចរក្សាទុកវិញ្ញាបនបត្រ។',
                })}
              </p>
              {returnTo && (
                <Link to={returnTo} className="mt-4 inline-block font-semibold text-navy hover:underline">
                  {t({ en: 'Return to your certificate', km: 'ត្រលប់ទៅវិញ្ញាបនបត្ររបស់អ្នក' })}
                </Link>
              )}
            </div>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setDone(true)
              }}
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-email" className="text-[13px] font-semibold text-ink">
                  {t({ en: 'Email', km: 'អ៊ីមែល' })}
                </label>
                <input id="reg-email" type="email" required className="rounded-lg border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-navy" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-company" className="text-[13px] font-semibold text-ink">
                  {t({ en: 'Company name', km: 'ឈ្មោះក្រុមហ៊ុន' })}
                </label>
                <input id="reg-company" type="text" required className="rounded-lg border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-navy" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-password" className="text-[13px] font-semibold text-ink">
                  {t({ en: 'Password', km: 'ពាក្យសម្ងាត់' })}
                </label>
                <input id="reg-password" type="password" required className="rounded-lg border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-navy" />
              </div>
              <button type="submit" className="mt-1 rounded-lg bg-navy px-5 py-3 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
                {t({ en: 'Create account', km: 'បង្កើតគណនី' })}
              </button>
            </form>
          )}
          {!done && (
            <p className="mt-5 text-center text-[13.5px] text-ink-soft">
              {t({ en: 'Already have an account?', km: 'មានគណនីរួចហើយមែនទេ?' })}{' '}
              <Link to="/login" className="font-semibold text-navy hover:underline">
                {t({ en: 'Sign in', km: 'ចូលប្រើប្រាស់' })}
              </Link>
            </p>
          )}
        </div>
      </Container>
    </>
  )
}
