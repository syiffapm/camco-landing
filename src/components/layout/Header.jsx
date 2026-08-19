import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../ui/Container'
import Emblem from '../brand/Emblem'
import LoginPicker from './LoginPicker'
import { useLocale } from '../../context/LocaleContext'
import { NAV_ITEMS } from '../../data/content'
import { exporterRegisterUrl, withSrc } from '../../config/links'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, ui, lang } = useLocale()

  const navLinkClass = ({ isActive }) =>
    `text-[14.5px] font-medium transition-colors hover:text-navy ${isActive ? 'text-navy font-semibold' : 'text-ink-soft'}`

  return (
    <header className="sticky top-0 z-30 border-b border-border-soft bg-surface/95 backdrop-blur">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Link to="/" className="flex flex-none items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-deep text-gold-bright">
            <Emblem className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="text-[19px] font-bold tracking-tight text-navy-deep">CamCO</strong>
            <small className={`mt-0.5 text-[11px] text-ink-faint ${lang === 'km' ? 'lang-km' : ''}`}>
              {t({ en: 'Certificate of Origin', km: 'វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើម' })}
            </small>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-3 md:flex">
          <LoginPicker />
          <a
            href={exporterRegisterUrl(withSrc())}
            className="rounded-lg bg-gold px-4 py-2 text-[14.5px] font-semibold text-white shadow-sm transition-colors hover:bg-gold-bright"
          >
            {ui('registerExporter')}
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-border-soft md:hidden"
          aria-label={ui('menu')}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <div id="mobile-nav-panel" className="border-t border-border-soft bg-surface md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-[15.5px] font-medium text-ink hover:bg-navy-50"
              >
                {t(item.label)}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border-soft pt-3">
              <LoginPicker variant="mobile" />
              <a
                href={exporterRegisterUrl(withSrc())}
                className="rounded-lg bg-gold px-4 py-2.5 text-center text-[14.5px] font-semibold text-white"
              >
                {ui('registerExporter')}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
