import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Emblem from '../brand/Emblem'
import { useLocale } from '../../context/LocaleContext'
import { FOOTER_LINKS } from '../../data/content'
import { exporterLoginUrl, forwarderLoginUrl, adminLoginUrl, withSrc } from '../../config/links'

function FooterCol({ title, links }) {
  const { t } = useLocale()
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-gold-bright">{t(title)}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.to || l.href}>
            {l.to ? (
              <Link to={l.to} className="text-[14px] text-navy-deep-ink-soft hover:text-white">
                {t(l.label)}
              </Link>
            ) : (
              <a href={l.href} className="text-[14px] text-navy-deep-ink-soft hover:text-white">
                {t(l.label)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const { t } = useLocale()

  const portalLinks = [
    { href: exporterLoginUrl(withSrc()), label: { en: 'Exporter Portal sign in', km: 'ចូលគណនីវិបផតថលអ្នកនាំចេញ' } },
    { to: '/login', label: { en: 'Buyer Portal sign in', km: 'ចូលគណនីវិបផតថលអ្នកទិញ' } },
    { href: forwarderLoginUrl(withSrc()), label: { en: 'Freight Forwarder Portal sign in', km: 'ចូលគណនីវិបផតថលក្រុមហ៊ុនដឹកជញ្ជូន' } },
    { href: adminLoginUrl(withSrc()), label: { en: 'Official & Admin Portal', km: 'វិបផតថលមន្ត្រី និងអ្នកគ្រប់គ្រង' } },
  ]

  return (
    <footer className="bg-navy-deep text-navy-deep-ink-soft">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="max-w-[34ch]">
          <div className="flex items-center gap-2.5 text-white">
            <Emblem className="h-6 w-6 text-gold-bright" />
            <strong className="text-[18px] font-bold">CamCO</strong>
          </div>
          <p className="mt-4 text-[13.5px] leading-relaxed">
            {t({
              en: 'The official national platform of the Kingdom of Cambodia for digital Certificates of Origin, operated by the Ministry of Commerce.',
              km: 'វេទិកាជាតិផ្លូវការរបស់ព្រះរាជាណាចក្រកម្ពុជា សម្រាប់វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមឌីជីថល ដែលដំណើរការដោយក្រសួងពាណិជ្ជកម្ម។',
            })}
          </p>
        </div>
        <FooterCol title={{ en: 'Platform', km: 'វេទិកា' }} links={FOOTER_LINKS.platform} />
        <FooterCol title={{ en: 'Audiences', km: 'ក្រុមអ្នកប្រើប្រាស់' }} links={FOOTER_LINKS.audiences} />
        <FooterCol title={{ en: 'Portals', km: 'វិបផតថល' }} links={portalLinks} />
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-4 py-6 text-[12.5px] sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span>
              © {new Date().getFullYear()}{' '}
              {t({ en: 'Ministry of Commerce, Kingdom of Cambodia. All rights reserved.', km: 'ក្រសួងពាណិជ្ជកម្ម នៃព្រះរាជាណាចក្រកម្ពុជា។ រក្សាសិទ្ធិគ្រប់យ៉ាង។' })}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-white">
                {t(l.label)}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  )
}
