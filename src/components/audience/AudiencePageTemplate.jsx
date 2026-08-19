import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import PageHero from '../ui/PageHero'
import Accordion, { AccordionItem } from '../ui/Accordion'
import { useLocale } from '../../context/LocaleContext'

export default function AudiencePageTemplate({ data }) {
  const { t } = useLocale()
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} desc={data.desc} />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[20px] font-bold text-navy-deep">{t(data.problem.title)}</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">{t(data.problem.text)}</p>
            <h2 className="mt-4 text-[20px] font-bold text-navy-deep">{t(data.solution.title)}</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">{t(data.solution.text)}</p>
          </div>
          <div className="grid aspect-[4/3] place-items-center rounded-xl border border-dashed border-border bg-navy-50 text-[13px] text-ink-faint">
            {t({ en: 'Portal screenshot', km: 'រូបថតអេក្រង់វិបផតថល' })}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-bold text-navy-deep">{t({ en: 'Benefits', km: 'អត្ថប្រយោជន៍' })}</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.benefits.map((b, i) => (
              <div key={i} className="rounded-2xl border border-border-soft bg-surface p-5">
                <h3 className="text-[15px] font-bold text-navy-deep">{t(b.title)}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{t(b.text)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-[20px] font-bold text-navy-deep">{t({ en: 'Getting started', km: 'ការចាប់ផ្តើម' })}</h2>
            <ol className="mt-4 flex flex-col gap-3">
              {data.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-[14.5px] text-ink-soft">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-navy-50 text-[12px] font-bold text-navy">{i + 1}</span>
                  {t(s)}
                </li>
              ))}
            </ol>
          </div>
          {data.faq && (
            <div>
              <h2 className="text-[20px] font-bold text-navy-deep">{t({ en: 'Questions', km: 'សំណួរ' })}</h2>
              <div className="mt-4">
                <Accordion>
                  {data.faq.map((f, i) => (
                    <AccordionItem key={i} id={`${data.key}-faq-${i}`} question={t(f.q)}>
                      {t(f.a)}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 rounded-2xl bg-navy-deep p-8 text-navy-deep-ink sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[20px] font-bold text-navy-deep-ink">{t(data.cta.title)}</h2>
            <p className="mt-1 text-[14px] text-navy-deep-ink-soft">{t(data.cta.text)}</p>
          </div>
          {data.cta.external ? (
            <a href={data.cta.href} className="flex-none rounded-lg bg-gold px-6 py-3 text-[14.5px] font-semibold text-white hover:bg-gold-bright">
              {t(data.cta.label)}
            </a>
          ) : (
            <Link to={data.cta.href} className="flex-none rounded-lg bg-gold px-6 py-3 text-[14.5px] font-semibold text-white hover:bg-gold-bright">
              {t(data.cta.label)}
            </Link>
          )}
        </div>
      </Container>
    </>
  )
}
