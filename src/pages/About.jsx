import HeroSection from "../components/About/HeroSection"
import OutdoorActivitiesSection from "../components/About/OutdoorActivitiesSection"
import StatisticsSection from "../components/About/StatisticsSection"
import WhyChooseUsSection from "../components/About/WhyChooseUsSection"
import VideoSection from "../components/About/VideoSection"
import StaffSection from "../components/About/StaffSection"
import ClientsSection from "../components/About/ClientsSection"

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection title="About Us" />
      <OutdoorActivitiesSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <VideoSection />
      <StaffSection />
      <ClientsSection />
    </div>
  )
}
