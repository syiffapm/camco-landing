import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import StatsSection from '../components/home/StatsSection'
import HowItWorks from '../components/home/HowItWorks'
import ServicesSection from '../components/home/ServicesSection'
import AudienceTabs from '../components/home/AudienceTabs'
import FormsGrid from '../components/home/FormsGrid'
import SecuritySection from '../components/home/SecuritySection'
import FeesSummary from '../components/home/FeesSummary'
import RequirementsSection from '../components/home/RequirementsSection'
import FaqAnnouncements from '../components/home/FaqAnnouncements'
import HelpContact from '../components/home/HelpContact'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatsSection />
      <HowItWorks />
      <ServicesSection />
      <AudienceTabs />
      <FormsGrid />
      <SecuritySection />
      <FeesSummary />
      <RequirementsSection />
      <FaqAnnouncements />
      <HelpContact />
    </>
  )
}
