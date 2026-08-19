import { Link } from 'react-router-dom'
import Emblem from '../brand/Emblem'
import { useLocale } from '../../context/LocaleContext'

export default function GovTopBar() {
  const { lang, setLang, ui, increaseText, decreaseText, textScaleIndex, textScaleSteps } = useLocale()

  return (
    <div className="bg-navy-deep text-navy-deep-ink">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-3 px-5 py-2 text-[12.5px] sm:px-6 md:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <Emblem className="h-4 w-4 flex-none text-gold-bright" />
          <span className="truncate">{ui('officialSite')}</span>
        </div>

        <div className="flex flex-none items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-1 rounded border border-white/20 sm:flex" role="group" aria-label="Text size">
            <button
              type="button"
              onClick={decreaseText}
              disabled={textScaleIndex === 0}
              aria-label="Decrease text size"
              className="px-2 py-0.5 text-[11px] font-semibold disabled:opacity-40"
            >
              A
            </button>
            <span className="h-3.5 w-px bg-white/20" aria-hidden="true" />
            <button
              type="button"
              onClick={increaseText}
              disabled={textScaleIndex === textScaleSteps - 1}
              aria-label="Increase text size"
              className="px-2 py-0.5 text-[13px] font-bold disabled:opacity-40"
            >
              A+
            </button>
          </div>

          <div className="flex items-center gap-1 rounded border border-white/20" role="group" aria-label="Language / ភាសា">
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 py-0.5 text-[11.5px] font-semibold ${lang === 'en' ? 'bg-gold-bright text-navy-deep' : ''}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('km')}
              aria-pressed={lang === 'km'}
              className={`px-2 py-0.5 text-[11.5px] font-semibold ${lang === 'km' ? 'bg-gold-bright text-navy-deep' : ''}`}
            >
              ខ្មែរ
            </button>
          </div>

          <Link to="/help" className="hidden underline-offset-2 hover:underline sm:inline">
            {ui('contact')}
          </Link>
        </div>
      </div>
    </div>
  )
}
