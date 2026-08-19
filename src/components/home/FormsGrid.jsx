import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useLocale } from '../../context/LocaleContext'
import { FORMS } from '../../data/content'

export default function FormsGrid() {
  const { t } = useLocale()
  return (
    <section className="py-14 sm:py-16">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={{ en: 'Form coverage', km: 'ការគ្របដណ្តប់ទម្រង់' }}
          title={{ en: 'Certificate of Origin forms supported', km: 'ទម្រង់វិញ្ញាបនបត្របញ្ជាក់ប្រភពដើមដែលគាំទ្រ' }}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {FORMS.map((f) => (
            <div key={f.code} className="rounded-xl border border-border-soft bg-surface p-4">
              <span className="text-[15px] font-bold text-navy-deep">{f.code}</span>
              <p className="mt-1 text-[13px] leading-snug text-ink-soft">{t(f.dest)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
