import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <HeroSection
        showVideoControls={false}
        stats={[
          {
            value: "100+",
            label: "Project Selesai",
            gradient: "from-blue-400 to-purple-400",
          },
          {
            value: "50+",
            label: "Client Puas",
            gradient: "from-purple-400 to-indigo-400",
          },
          {
            value: "5★",
            label: "Rating",
            gradient: "from-indigo-400 to-blue-400",
          },
        ]}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
