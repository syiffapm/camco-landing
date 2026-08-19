import { useParams, Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import NotFound from './NotFound'
import { useLocale } from '../context/LocaleContext'
import { ANNOUNCEMENTS } from '../data/announcements'

export default function AnnouncementDetailPage() {
  const { slug } = useParams()
  const { t, lang } = useLocale()
  const announcement = ANNOUNCEMENTS.find((a) => a.slug === slug)
  const dateFormatter = new Intl.DateTimeFormat(lang === 'km' ? 'km-KH' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  if (!announcement) return <NotFound />

  return (
    <>
      <PageHero eyebrow={announcement.category} title={announcement.title} />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-[680px] flex-col gap-6">
          <Link to="/announcements" className="w-fit text-[13.5px] font-semibold text-navy hover:underline">
            {t({ en: '← All announcements', km: '← សេចក្តីប្រកាសទាំងអស់' })}
          </Link>
          <time dateTime={announcement.date} className="text-[13px] font-medium text-ink-faint">
            {dateFormatter.format(new Date(announcement.date))}
          </time>
          <p className="text-[16px] leading-relaxed text-ink-soft">{t(announcement.body)}</p>
        </div>
      </Container>
    </>
  )
}
