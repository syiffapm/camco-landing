import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../context/LocaleContext'
import { exporterLoginUrl, forwarderLoginUrl, adminLoginUrl, withSrc } from '../../config/links'

const ROLES = [
  {
    key: 'exporter',
    title: { en: 'Exporter', km: 'អ្នកនាំចេញ' },
    desc: { en: 'Apply for and manage Certificates of Origin', km: 'ដាក់ស្នើ និងគ្រប់គ្រងវិញ្ញាបនបត្របញ្ជាក់ប្រភពដើម' },
    href: () => exporterLoginUrl(withSrc()),
    external: true,
  },
  {
    key: 'buyer',
    title: { en: 'Buyer / Importer', km: 'អ្នកទិញ/អ្នកនាំចូល' },
    desc: { en: 'Save and monitor certificates you receive', km: 'រក្សាទុក និងតាមដានវិញ្ញាបនបត្រដែលអ្នកទទួល' },
    href: () => '/login',
    external: false,
  },
  {
    key: 'forwarder',
    title: { en: 'Freight Forwarder', km: 'ក្រុមហ៊ុនដឹកជញ្ជូន' },
    desc: { en: 'Shipment copy access & system integration', km: 'ចូលប្រើច្បាប់ចម្លងសម្រាប់ដឹកជញ្ជូន និងការភ្ជាប់ប្រព័ន្ធ' },
    href: () => forwarderLoginUrl(withSrc()),
    external: true,
  },
  {
    key: 'admin',
    title: { en: 'Official & Admin', km: 'មន្ត្រី និងអ្នកគ្រប់គ្រង' },
    desc: { en: 'Internal Ministry of Commerce users only', km: 'សម្រាប់តែអ្នកប្រើប្រាស់ផ្ទៃក្នុងក្រសួងពាណិជ្ជកម្មប៉ុណ្ណោះ' },
    href: () => adminLoginUrl(withSrc()),
    external: true,
    muted: true,
  },
]

export default function LoginPicker({ variant = 'header' }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const { t, ui } = useLocale()

  useEffect(() => {
    function onClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const btnClass =
    variant === 'header'
      ? 'rounded-lg border border-navy/30 px-4 py-2 text-[14.5px] font-semibold text-navy hover:border-navy hover:bg-navy-50'
      : 'w-full rounded-lg border border-navy/30 px-4 py-2.5 text-[14.5px] font-semibold text-navy'

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className={btnClass}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {ui('login')}
      </button>

      {open && (
        <div
          role="menu"
          aria-label={ui('login')}
          className="absolute right-0 z-40 mt-2 w-[300px] rounded-2xl border border-border-soft bg-surface p-2 shadow-card"
        >
          <p className="px-3 pb-2 pt-1 text-[12px] font-semibold uppercase tracking-wide text-ink-faint">
            {t({ en: 'Sign in as…', km: 'ចូលប្រើប្រាស់ជា…' })}
          </p>
          {ROLES.map((role) => {
            const content = (
              <>
                <span className="block text-[14.5px] font-semibold text-navy-deep">{t(role.title)}</span>
                <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-soft">{t(role.desc)}</span>
              </>
            )
            const cls = `block rounded-xl px-3 py-2.5 hover:bg-navy-50 ${role.muted ? 'mt-1 border-t border-border-soft pt-3 opacity-80' : ''}`
            return role.external ? (
              <a key={role.key} role="menuitem" href={role.href()} className={cls} onClick={() => setOpen(false)}>
                {content}
              </a>
            ) : (
              <Link key={role.key} role="menuitem" to={role.href()} className={cls} onClick={() => setOpen(false)}>
                {content}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
