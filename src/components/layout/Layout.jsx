import { Outlet } from 'react-router-dom'
import GovTopBar from './GovTopBar'
import Header from './Header'
import Footer from './Footer'
import MobileStickyBar from './MobileStickyBar'
import { useLocale } from '../../context/LocaleContext'

export default function Layout() {
  const { ui } = useLocale()
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <a href="#main" className="skip-link">
        {ui('skipToContent')}
      </a>
      <GovTopBar />
      <Header />
      <main id="main" className="flex-1 pb-20 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
