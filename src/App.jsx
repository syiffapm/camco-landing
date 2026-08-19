import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import ExternalRedirect from './pages/ExternalRedirect'
import { buyerVerifyUrl, buyerHomeUrl, withSrc } from './config/links'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ForExportersPage from './pages/ForExportersPage'
import ForBuyersPage from './pages/ForBuyersPage'
import ForFreightForwardersPage from './pages/ForFreightForwardersPage'
import FeesPage from './pages/FeesPage'
import RequirementsPage from './pages/RequirementsPage'
import FaqPage from './pages/FaqPage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import AnnouncementDetailPage from './pages/AnnouncementDetailPage'
import AboutPage from './pages/AboutPage'
import HelpPage from './pages/HelpPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import AccessibilityPage from './pages/AccessibilityPage'
import SitemapPage from './pages/SitemapPage'
import NotFound from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<ExternalRedirect to={buyerVerifyUrl(withSrc())} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-exporters" element={<ForExportersPage />} />
          <Route path="/for-buyers" element={<ForBuyersPage />} />
          <Route path="/for-freight-forwarders" element={<ForFreightForwardersPage />} />
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/requirements" element={<RequirementsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/announcements/:slug" element={<AnnouncementDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/login" element={<ExternalRedirect to={buyerHomeUrl(withSrc())} />} />
          <Route path="/register-buyer" element={<ExternalRedirect to={buyerHomeUrl(withSrc())} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
