import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface Service {
  title: string
  description: string
  image: string
  gradient: string
}

interface ServicesSectionProps {
  title?: string
  subtitle?: string
  services?: Service[]
  ctaText?: string
  ctaHref?: string
}

export function ServicesSection({
  title = "Layanan Unggulan",
  subtitle = "Berbagai layanan teknologi profesional untuk mendukung operasional bisnis Anda",
  services = [
    {
      title: "OS Installation",
      description: "Instalasi sistem operasi Windows, macOS, dan Linux dengan konfigurasi optimal",
      image: "/images/software-development.jpeg",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
    },
    {
      title: "Software Setup",
      description: "Setup dan konfigurasi software aplikasi sesuai kebutuhan bisnis Anda",
      image: "/images/computer-repair.jpeg",
      gradient: "from-[#3B82F6] to-[#1E3A8A]",
    },
    {
      title: "Tech Support",
      description: "Dukungan teknis 24/7 untuk troubleshooting dan maintenance sistem",
      image: "/images/tech-support.jpeg",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
    },
  ],
  ctaText = "Lihat Semua Layanan",
  ctaHref = "/layanan",
}: ServicesSectionProps) {
  return (
    <section className="py-20 bg-[#E5E7EB]">
      <div className="container px-4 mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1E3A8A]">{title}</h2>
            <p className="text-xl text-[#1E3A8A]/70 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-3 text-[#1E3A8A] text-xl">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg`}></div>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-[#1E3A8A]/70 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3"
              asChild
            >
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
