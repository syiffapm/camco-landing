import Container from './Container'
import { useLocale } from '../../context/LocaleContext'

/** Compact hero banner used on inner (non-home) pages. */
export default function PageHero({ eyebrow, title, desc }) {
  const { t } = useLocale()
  return (
    <div className="border-b border-border-soft bg-navy-50">
      <Container className="flex flex-col gap-3 py-12 sm:py-16">
        {eyebrow && (
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{t(eyebrow)}</span>
        )}
        <h1 className="max-w-[36ch] text-[30px] font-bold leading-tight text-navy-deep sm:text-[38px]">{t(title)}</h1>
        {desc && <p className="max-w-[65ch] text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">{t(desc)}</p>}
      </Container>
    </div>
  )
}
