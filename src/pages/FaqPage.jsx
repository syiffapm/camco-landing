import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import Accordion, { AccordionItem } from '../components/ui/Accordion'
import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { FAQ } from '../data/content'

export default function FaqPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero
        eyebrow={{ en: 'FAQ', km: 'សំណួរដែលសួរញឹកញាប់' }}
        title={{ en: 'Frequently asked questions', km: 'សំណួរដែលសួរញឹកញាប់' }}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-[760px]">
          <Accordion>
            {FAQ.map((item, i) => (
              <AccordionItem key={i} id={`faq-${i}`} question={t(item.q)}>
                <p>{t(item.a)}</p>
                {item.link && (
                  <Link to={item.link.to} className="mt-2 inline-block text-[13.5px] font-semibold text-navy hover:underline">
                    {t(item.link.label)} →
                  </Link>
                )}
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-[14px] text-ink-soft">
            {t({ en: "Can't find your answer?", km: 'រកមិនឃើញចម្លើយរបស់អ្នកមែនទេ?' })}{' '}
            <Link to="/help" className="font-semibold text-navy hover:underline">
              {t({ en: 'Contact our team', km: 'ទាក់ទងក្រុមការងាររបស់យើង' })}
            </Link>
          </p>
        </div>
      </Container>
    </>
  )
}
