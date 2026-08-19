import SmartLink from './SmartLink'
import { useLocale } from '../../context/LocaleContext'

/**
 * Action-first service card: icon, role badge, one clear action — modelled
 * on the "what do you need to do" pattern (not "which audience are you").
 */
export default function ActionCard({ icon, iconBg, iconColor, badge, badgeTone, title, desc, price, cta, href, external, highlighted }) {
  const { t } = useLocale()

  return (
    <SmartLink
      href={external ? href : undefined}
      to={!external ? href : undefined}
      className={`group flex h-full flex-col gap-3.5 rounded-2xl border bg-surface p-6 transition-all hover:shadow-card ${
        highlighted ? 'border-2 border-gold' : 'border-border-soft hover:border-navy/40'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`grid h-12 w-12 flex-none place-items-center rounded-xl ${iconBg}`}>
          <svg viewBox="0 0 24 24" className={`h-6 w-6 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icon}
          </svg>
        </span>
        {badge && (
          <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide ${badgeTone}`}>
            {t(badge)}
          </span>
        )}
      </div>

      <h3 className="text-[16.5px] font-bold leading-snug text-navy-deep">{t(title)}</h3>
      <p className="flex-1 text-[13.5px] leading-relaxed text-ink-soft">{t(desc)}</p>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        {price ? (
          <span className="rounded-lg border border-gold/30 bg-gold-soft px-2.5 py-1 text-[12px] font-semibold text-gold">{t(price)}</span>
        ) : (
          <span />
        )}
        <span className="text-[13.5px] font-bold text-navy transition-transform group-hover:translate-x-0.5">
          {t(cta)} →
        </span>
      </div>
    </SmartLink>
  )
}
