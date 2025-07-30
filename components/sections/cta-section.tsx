import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  gradient?: string
}

export function CTASection({
  title = "Siap Mengembangkan Bisnis Digital Anda?",
  subtitle = "Konsultasikan kebutuhan digital Anda dengan tim ahli kami. Dapatkan solusi terbaik untuk bisnis Anda.",
  primaryCTA = {
    text: "Konsultasi Gratis",
    href: "/booking",
  },
  secondaryCTA = {
    text: "Lihat Testimonial",
    href: "/testimonial",
  },
  gradient = "from-[#1E3A8A] to-[#3B82F6]",
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradient} text-white`}>
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-[#1E3A8A] hover:bg-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 font-semibold"
            asChild
          >
            <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 font-semibold"
            asChild
          >
            <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
