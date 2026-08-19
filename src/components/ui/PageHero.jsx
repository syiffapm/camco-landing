import Container from './Container'
import { useLocale } from '../../context/LocaleContext'

/** Compact hero banner used on inner (non-home) pages. Pass `image` for a
 *  photo banner with a dark overlay (used sparingly — About, Help). */
export default function PageHero({ eyebrow, title, desc, image }) {
  const { t } = useLocale()

  if (image) {
    return (
      <div className="relative overflow-hidden border-b border-border-soft bg-navy-deep">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-navy-deep/55" aria-hidden="true" />
        <Container className="relative flex flex-col gap-3 py-14 sm:py-20">
          {eyebrow && (
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-bright">{t(eyebrow)}</span>
          )}
          <h1 className="max-w-[36ch] text-[30px] font-bold leading-tight text-navy-deep-ink sm:text-[38px]">{t(title)}</h1>
          {desc && <p className="max-w-[65ch] text-[16px] leading-relaxed text-navy-deep-ink-soft sm:text-[17px]">{t(desc)}</p>}
        </Container>
      </div>
    )
  }

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
