import { useLocale } from '../../context/LocaleContext'

export default function SectionHeading({ eyebrow, title, desc, align = 'left' }) {
  const { t } = useLocale()
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left'
  return (
    <div className={`flex max-w-[62ch] flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="inline-flex w-fit items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">
          {t(eyebrow)}
        </span>
      )}
      <h2 className="text-[28px] leading-tight font-bold text-navy-deep sm:text-[32px]">{t(title)}</h2>
      {desc && <p className="text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">{t(desc)}</p>}
    </div>
  )
}
