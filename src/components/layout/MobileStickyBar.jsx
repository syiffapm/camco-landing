import { Link } from 'react-router-dom'
import { useLocale } from '../../context/LocaleContext'
import { exporterRegisterUrl, withSrc } from '../../config/links'

/** Bottom action bar for phones (spec 8, 360–599px breakpoint). */
export default function MobileStickyBar() {
  const { ui } = useLocale()
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border-soft bg-surface/95 p-2.5 backdrop-blur sm:hidden">
      <Link
        to="/verify"
        className="flex-1 rounded-lg border border-navy px-4 py-3 text-center text-[14.5px] font-semibold text-navy"
      >
        {ui('verify')}
      </Link>
      <a
        href={exporterRegisterUrl(withSrc())}
        className="flex-1 rounded-lg bg-gold px-4 py-3 text-center text-[14.5px] font-semibold text-white"
      >
        {ui('registerExporter')}
      </a>
    </div>
  )
}
