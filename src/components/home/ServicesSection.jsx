import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ActionCard from '../ui/ActionCard'
import { useLocale } from '../../context/LocaleContext'
import { ACTION_CARDS } from '../../data/actionCards'

export default function ServicesSection() {
  const { t } = useLocale()

  return (
    <section id="services" className="py-14 sm:py-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={{ en: 'Services', km: 'សេវាកម្ម' }}
            title={{ en: 'What do you need to do today?', km: 'តើថ្ងៃនេះអ្នកត្រូវធ្វើអ្វី?' }}
            desc={{ en: 'One action per card — pick yours and go straight to it.', km: 'មួយសកម្មភាពក្នុងមួយកាត — ជ្រើសរើសរបស់អ្នក ហើយចូលទៅផ្ទាល់។' }}
          />
          <Link to="/services" className="flex-none text-[14.5px] font-semibold text-navy hover:underline">
            {t({ en: 'View all services →', km: 'មើលសេវាកម្មទាំងអស់ →' })}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTION_CARDS.map((card) => (
            <ActionCard key={card.key} {...card} />
          ))}
        </div>
      </Container>
    </section>
  )
}
