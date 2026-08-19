import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion, { AccordionItem } from '../ui/Accordion'
import { useLocale } from '../../context/LocaleContext'
import { FAQ } from '../../data/content'
import { ANNOUNCEMENTS } from '../../data/announcements'

export default function FaqAnnouncements() {
  const { t, lang } = useLocale()
  const top = FAQ.slice(0, 6)
  const latest = ANNOUNCEMENTS.slice(0, 3)
  const dateFormatter = new Intl.DateTimeFormat(lang === 'km' ? 'km-KH' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <section className="py-14 sm:py-16">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow={{ en: 'FAQ', km: 'សំណួរដែលសួរញឹកញាប់' }} title={{ en: 'Frequently asked questions', km: 'សំណួរដែលសួរញឹកញាប់' }} />
            <Link to="/faq" className="flex-none text-[14.5px] font-semibold text-navy hover:underline">
              {t({ en: 'All FAQs →', km: 'សំណួរទាំងអស់ →' })}
            </Link>
          </div>
          <Accordion>
            {top.map((item, i) => (
              <AccordionItem key={i} id={`home-faq-${i}`} question={t(item.q)}>
                <p>{t(item.a)}</p>
                {item.link && (
                  <Link to={item.link.to} className="mt-2 inline-block text-[13.5px] font-semibold text-navy hover:underline">
                    {t(item.link.label)} →
                  </Link>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-4">
          <SectionHeading eyebrow={{ en: 'Announcements', km: 'សេចក្តីប្រកាស' }} title={{ en: 'Latest updates', km: 'ព័ត៌មានថ្មីៗ' }} />
          <div className="flex flex-col gap-3">
            {latest.map((a) => (
              <Link
                key={a.slug}
                to={`/announcements/${a.slug}`}
                className="flex flex-col gap-1.5 rounded-2xl border border-border-soft bg-surface p-5 transition-colors hover:border-navy"
              >
                <time dateTime={a.date} className="text-[12px] font-medium text-ink-faint">
                  {dateFormatter.format(new Date(a.date))}
                </time>
                <h3 className="text-[14.5px] font-bold leading-snug text-navy-deep">{t(a.title)}</h3>
              </Link>
            ))}
          </div>
          <Link to="/announcements" className="w-fit text-[13.5px] font-semibold text-navy hover:underline">
            {t({ en: 'All announcements →', km: 'សេចក្តីប្រកាសទាំងអស់ →' })}
          </Link>
        </div>
      </Container>
    </section>
  )
}
