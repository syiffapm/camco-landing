import Container from '../ui/Container'
import { useLocale } from '../../context/LocaleContext'
import { STATS, STATS_NOTE } from '../../data/content'

export default function StatsSection() {
  const { t } = useLocale()
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.key} className="rounded-2xl border border-border-soft bg-surface p-5">
              <span className="block text-[26px] font-bold text-navy-deep sm:text-[30px]">{s.value}</span>
              <span className="mt-1 block text-[13px] leading-snug text-ink-soft">{t(s.label)}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] text-ink-faint">{t(STATS_NOTE)}</p>
      </Container>
    </section>
  )
}
