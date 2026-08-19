import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHero from '../components/ui/PageHero'
import { useLocale } from '../context/LocaleContext'

const GROUPS = [
  {
    title: { en: 'Main', km: 'ចម្បង' },
    links: [
      { to: '/', label: { en: 'Home', km: 'ទំព័រដើម' } },
      { to: '/verify', label: { en: 'Verify a certificate', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ' } },
      { to: '/services', label: { en: 'Services catalogue', km: 'កាតាឡុកសេវាកម្ម' } },
      { to: '/how-it-works', label: { en: 'How it works', km: 'របៀបប្រើប្រាស់' } },
      { to: '/fees', label: { en: 'Fees & processing time', km: 'ថ្លៃសេវា និងរយៈពេល' } },
      { to: '/requirements', label: { en: 'Requirements & documents', km: 'តម្រូវការ និងឯកសារ' } },
      { to: '/faq', label: { en: 'FAQ', km: 'សំណួរញឹកញាប់' } },
      { to: '/announcements', label: { en: 'Announcements', km: 'សេចក្តីប្រកាស' } },
    ],
  },
  {
    title: { en: 'Audiences', km: 'ក្រុមអ្នកប្រើប្រាស់' },
    links: [
      { to: '/for-exporters', label: { en: 'For exporters', km: 'សម្រាប់អ្នកនាំចេញ' } },
      { to: '/for-buyers', label: { en: 'For buyers & importers', km: 'សម្រាប់អ្នកទិញ' } },
      { to: '/for-freight-forwarders', label: { en: 'For freight forwarders', km: 'សម្រាប់អ្នកដឹកជញ្ជូន' } },
    ],
  },
  {
    title: { en: 'Institutional', km: 'ស្ថាប័ន' },
    links: [
      { to: '/about', label: { en: 'About CamCO', km: 'អំពី CamCO' } },
      { to: '/help', label: { en: 'Help & contact', km: 'ជំនួយ និងទំនាក់ទំនង' } },
      { to: '/privacy', label: { en: 'Privacy Policy', km: 'គោលការណ៍ឯកជនភាព' } },
      { to: '/terms', label: { en: 'Terms of Service', km: 'លក្ខខណ្ឌប្រើប្រាស់' } },
      { to: '/accessibility', label: { en: 'Accessibility Statement', km: 'សេចក្តីថ្លែងការណ៍ភាពងាយស្រួល' } },
    ],
  },
]

export default function SitemapPage() {
  const { t } = useLocale()
  return (
    <>
      <PageHero eyebrow={{ en: 'Sitemap', km: 'ផែនទីគេហទំព័រ' }} title={{ en: 'Sitemap', km: 'ផែនទីគេហទំព័រ' }} />
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-3 sm:py-16">
        {GROUPS.map((g, i) => (
          <div key={i}>
            <h2 className="text-[14px] font-bold uppercase tracking-wide text-gold">{t(g.title)}</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[14.5px] text-ink-soft hover:text-navy hover:underline">
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </>
  )
}
