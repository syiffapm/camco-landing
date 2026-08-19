import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useLocale } from '../../context/LocaleContext'
import { SERVICES } from '../../data/services'
import { SERVICE_ROUTES, HOME_FEATURED_SERVICES } from '../../data/routing'

export default function ServicesSection() {
  const { t } = useLocale()
  const featured = HOME_FEATURED_SERVICES.map((code) => SERVICES.find((s) => s.code === code)).filter(Boolean)

  return (
    <section id="services" className="py-14 sm:py-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={{ en: 'Services', km: 'សេវាកម្ម' }}
            title={{ en: 'Most-used CamCO services', km: 'សេវាកម្ម CamCO ដែលប្រើប្រាស់ច្រើនបំផុត' }}
            desc={{ en: 'The full catalogue covers every step from application to customs sync.', km: 'កាតាឡុកពេញលេញគ្របដណ្តប់រាល់ជំហានពីការដាក់ស្នើរហូតដល់ការធ្វើសមកាលកម្មជាមួយគយ។' }}
          />
          <Link to="/services" className="flex-none text-[14.5px] font-semibold text-navy hover:underline">
            {t({ en: 'View all services →', km: 'មើលសេវាកម្មទាំងអស់ →' })}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((svc) => {
            const route = SERVICE_ROUTES[svc.code]
            return (
              <article key={svc.code} className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-surface p-6">
                <span className="w-fit rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy">
                  {svc.code}
                </span>
                <h3 className="text-[16.5px] font-bold text-navy-deep">{t(svc.name)}</h3>
                <p className="text-[14px] leading-relaxed text-ink-soft">{t(svc.desc)}</p>
                <dl className="mt-1 grid grid-cols-2 gap-2 text-[12.5px] text-ink-faint">
                  <div>
                    <dt className="font-semibold text-ink-soft">{t({ en: 'Fee', km: 'ថ្លៃសេវា' })}</dt>
                    <dd>{t(svc.fee)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-soft">{t({ en: 'SLA', km: 'SLA' })}</dt>
                    <dd>{t(svc.sla)}</dd>
                  </div>
                </dl>
                {route?.cta &&
                  (route.external ? (
                    <a href={route.href()} className="mt-2 text-[14px] font-semibold text-navy hover:underline">
                      {t(route.cta)} →
                    </a>
                  ) : (
                    <Link to={route.href()} className="mt-2 text-[14px] font-semibold text-navy hover:underline">
                      {t(route.cta)} →
                    </Link>
                  ))}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
