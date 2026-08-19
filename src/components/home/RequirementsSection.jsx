import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion, { AccordionItem } from '../ui/Accordion'
import { useLocale } from '../../context/LocaleContext'
import { REQUIREMENTS } from '../../data/content'

export default function RequirementsSection() {
  const { t } = useLocale()
  return (
    <section className="bg-surface-2 py-14 sm:py-16">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={{ en: 'Get ready', km: 'ត្រៀមខ្លួន' }}
            title={{ en: 'Requirements & documents', km: 'តម្រូវការ និងឯកសារ' }}
          />
          <Link to="/requirements" className="flex-none text-[14.5px] font-semibold text-navy hover:underline">
            {t({ en: 'Full checklist →', km: 'បញ្ជីត្រួតពិនិត្យពេញលេញ →' })}
          </Link>
        </div>
        <Accordion>
          <AccordionItem id="req-account" question={t(REQUIREMENTS.account.title)} defaultOpen>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {REQUIREMENTS.account.items.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" aria-hidden="true" />
                  {t(it)}
                </li>
              ))}
            </ul>
          </AccordionItem>
          <AccordionItem id="req-submission" question={t(REQUIREMENTS.submission.title)}>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {REQUIREMENTS.submission.items.map((it, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" aria-hidden="true" />
                  {t(it)}
                </li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
      </Container>
    </section>
  )
}
