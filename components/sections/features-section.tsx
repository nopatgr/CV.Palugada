import type React from "react"
import { Users, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  gradient: string
}

interface FeaturesSectionProps {
  title?: string
  subtitle?: string
  features?: Feature[]
}

export function FeaturesSection({
  title = "Mengapa Memilih Kami?",
  subtitle = "Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi",
  features = [
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Solusi digital yang cepat dan dapat diandalkan untuk bisnis Anda",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Tim ahli berpengalaman dalam berbagai bidang teknologi digital",
      gradient: "from-[#3B82F6] to-[#1E3A8A]",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Keamanan data dan privasi adalah prioritas utama kami",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
    },
  ],
}: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1E3A8A]">{title}</h2>
            <p className="text-xl text-[#1E3A8A]/70 max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#1E3A8A] text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#1E3A8A]/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
