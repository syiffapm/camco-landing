import { useState } from 'react'
import Container from '../ui/Container'
import { useLocale } from '../../context/LocaleContext'

/** SVC-09 titik masuk: "Ajukan akses forwarder" (spec 15.6, langkah 1). */
export default function OnboardingRequestForm() {
  const { t } = useLocale()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="onboarding" className="border-t border-border-soft bg-surface-2 py-14 sm:py-16">
      <Container className="max-w-[640px]">
        <h2 className="text-[22px] font-bold text-navy-deep">{t({ en: 'Request forwarder access', km: 'ស្នើសុំចូលប្រើសម្រាប់ក្រុមហ៊ុនដឹកជញ្ជូន' })}</h2>
        <p className="mt-2 text-[14.5px] text-ink-soft">
          {t({
            en: 'Submit your details and the Ministry will review your onboarding request.',
            km: 'ដាក់ស្នើព័ត៌មានរបស់អ្នក ហើយក្រសួងនឹងពិនិត្យសំណើចុះឈ្មោះរបស់អ្នក។',
          })}
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-success/30 bg-success-soft p-6 text-[14.5px] text-success">
            {t({
              en: 'Request received (demo). Our onboarding team will contact you at the email or phone number you provided.',
              km: 'បានទទួលសំណើ (គំរូ)។ ក្រុមចុះឈ្មោះរបស់យើងនឹងទាក់ទងអ្នកតាមអ៊ីមែល ឬលេខទូរស័ព្ទដែលអ្នកបានផ្តល់។',
            })}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { id: 'company', label: { en: 'Company name', km: 'ឈ្មោះក្រុមហ៊ុន' } },
              { id: 'regnum', label: { en: 'Business registration number', km: 'លេខចុះបញ្ជីអាជីវកម្ម' } },
              { id: 'contact', label: { en: 'Contact person & phone', km: 'អ្នកទំនាក់ទំនង និងលេខទូរស័ព្ទ' } },
              { id: 'exporters', label: { en: 'Exporters you work with', km: 'អ្នកនាំចេញដែលអ្នកសហការជាមួយ' } },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-[13px] font-semibold text-ink">
                  {t(f.label)}
                </label>
                <input id={f.id} type="text" required className="rounded-lg border border-border px-3.5 py-2.5 text-[14px] outline-none focus:border-navy" />
              </div>
            ))}
            <button type="submit" className="sm:col-span-2 mt-1 w-fit rounded-lg bg-navy px-6 py-3 text-[14.5px] font-semibold text-white hover:bg-navy-hover">
              {t({ en: 'Submit request', km: 'ដាក់ស្នើសំណើ' })}
            </button>
          </form>
        )}
      </Container>
    </section>
  )
}
