import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import ActionCard from '../components/ui/ActionCard'
import { useLocale } from '../context/LocaleContext'
import { SERVICES, AUDIENCE_LABEL } from '../data/services'
import { SERVICE_ROUTES } from '../data/routing'
import { ACTION_CARDS } from '../data/actionCards'

const FILTERS = ['all', 'exporter', 'buyer', 'forwarder']

export default function ServicesPage() {
  const { t } = useLocale()
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? SERVICES : SERVICES.filter((s) => s.audience === filter)

  return (
    <>
      <PageHero
        eyebrow={{ en: 'Services', km: 'សេវាកម្ម' }}
        title={{ en: 'What do you need to do today?', km: 'តើថ្ងៃនេះអ្នកត្រូវធ្វើអ្វី?' }}
        desc={{
          en: 'Pick your action below — exporter, buyer or freight forwarder — or browse the full catalogue further down.',
          km: 'ជ្រើសរើសសកម្មភាពរបស់អ្នកខាងក្រោម — អ្នកនាំចេញ អ្នកទិញ ឬអ្នកដឹកជញ្ជូន — ឬមើលកាតាឡុកពេញលេញនៅខាងក្រោម។',
        }}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTION_CARDS.map((card) => (
            <ActionCard key={card.key} {...card} />
          ))}
        </div>
      </Container>

      <Container className="pb-12 sm:pb-16">
        <div className="border-t border-border-soft pt-12 sm:pt-16">
          <h2 className="text-[22px] font-bold text-navy-deep">{t({ en: 'Full services catalogue', km: 'កាតាឡុកសេវាកម្មពេញលេញ' })}</h2>
          <p className="mt-2 max-w-[70ch] text-[14.5px] text-ink-soft">
            {t({
              en: 'The single source of truth for every service, fee and SLA referenced across the site.',
              km: 'ប្រភពសំខាន់តែមួយសម្រាប់សេវាកម្ម ថ្លៃសេវា និង SLA ដែលបានយោងនៅទូទាំងគេហទំព័រ។',
            })}
          </p>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by audience">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-4 py-2 text-[13.5px] font-semibold ${
                  filter === f ? 'border-navy bg-navy text-white' : 'border-border text-ink-soft hover:border-navy'
                }`}
              >
                {f === 'all' ? t({ en: 'All', km: 'ទាំងអស់' }) : t(AUDIENCE_LABEL[f])}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="mt-10 text-[15px] text-ink-soft">
              {t({ en: 'No services match this filter yet.', km: 'មិនមានសេវាកម្មត្រូវនឹងតម្រងនេះទេ។' })}{' '}
              <button type="button" onClick={() => setFilter('all')} className="font-semibold text-navy hover:underline">
                {t({ en: 'Clear filter', km: 'សម្អាតតម្រង' })}
              </button>
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((svc) => {
                const route = SERVICE_ROUTES[svc.code]
                return (
                  <article key={svc.code} className="flex flex-col gap-3 rounded-2xl border border-border-soft bg-surface p-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy">{svc.code}</span>
                      <span className="text-[11.5px] font-semibold text-ink-faint">{t(AUDIENCE_LABEL[svc.audience])}</span>
                    </div>
                    <h3 className="text-[16.5px] font-bold text-navy-deep">{t(svc.name)}</h3>
                    <p className="text-[14px] leading-relaxed text-ink-soft">{t(svc.desc)}</p>
                    <dl className="mt-1 grid grid-cols-2 gap-y-2 text-[12.5px] text-ink-faint sm:grid-cols-4">
                      <div>
                        <dt className="font-semibold text-ink-soft">{t({ en: 'Channel', km: 'ប៉ុស្តិ៍' })}</dt>
                        <dd>{t(svc.channel)}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink-soft">{t({ en: 'Account', km: 'គណនី' })}</dt>
                        <dd>
                          {svc.account === true
                            ? t({ en: 'Required', km: 'ចាំបាច់' })
                            : svc.account === 'optional'
                              ? t({ en: 'Optional', km: 'ស្រេចចិត្ត' })
                              : t({ en: 'Not needed', km: 'មិនចាំបាច់' })}
                        </dd>
                      </div>
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
          )}
        </div>
      </Container>
    </>
  )
}
