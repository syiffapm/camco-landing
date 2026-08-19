import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'
import { ANNOUNCEMENTS } from '../data/announcements'

const CATEGORY_STYLE = {
  Service: 'bg-navy-50 text-navy',
  Disruption: 'bg-warn-soft text-warn',
  Regulation: 'bg-gold-soft text-gold',
}

export default function AnnouncementsPage() {
  const { t, lang } = useLocale()
  const dateFormatter = new Intl.DateTimeFormat(lang === 'km' ? 'km-KH' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Announcements & regulations', km: 'សេចក្តីប្រកាស និងបទប្បញ្ញត្តិ' }}
        title={{ en: 'Announcements & Regulations', km: 'សេចក្តីប្រកាស និងបទប្បញ្ញត្តិ' }}
        desc={{
          en: 'The official channel for tariff changes, policy updates, and service disruptions.',
          km: 'បណ្តាញផ្លូវការសម្រាប់ការផ្លាស់ប្តូរអត្រា ការធ្វើបច្ចុប្បន្នភាពគោលនយោបាយ និងការរំខានសេវាកម្ម។',
        }}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-5">
          {ANNOUNCEMENTS.map((a) => (
            <Link
              key={a.slug}
              to={`/announcements/${a.slug}`}
              className="flex flex-col gap-2 rounded-2xl border border-border-soft bg-surface p-6 transition-colors hover:border-navy"
            >
              <div className="flex flex-wrap items-center gap-3 text-[12.5px]">
                <span className={`rounded-full px-2.5 py-1 font-semibold ${CATEGORY_STYLE[a.category.en] || 'bg-navy-50 text-navy'}`}>
                  {t(a.category)}
                </span>
                <time dateTime={a.date} className="text-ink-faint">
                  {dateFormatter.format(new Date(a.date))}
                </time>
              </div>
              <h2 className="text-[17px] font-bold text-navy-deep">{t(a.title)}</h2>
              <p className="text-[14px] leading-relaxed text-ink-soft">{t(a.excerpt)}</p>
              <span className="mt-1 text-[13.5px] font-semibold text-navy">{t({ en: 'Read more →', km: 'អានបន្ថែម →' })}</span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
