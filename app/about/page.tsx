import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Link from "next/link"
import { Target, Lightbulb, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Fokus pada Hasil",
      description: "Kami berkomitmen memberikan solusi yang menghasilkan dampak nyata bagi bisnis klien.",
    },
    {
      icon: Heart,
      title: "Kepuasan Klien",
      description: "Kepuasan dan kesuksesan klien adalah prioritas utama dalam setiap project yang kami kerjakan.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description: "Selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terdepan.",
    },
    {
      icon: Zap,
      title: "Kualitas Tinggi",
      description: "Standar kualitas tinggi dalam setiap aspek pengembangan dan layanan yang kami berikan.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-20 mt-20">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tentang Kami</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Palugada Digital adalah partner terpercaya untuk solusi teknologi bisnis Anda
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1E3A8A]">Cerita Kami</h2>
                <div className="space-y-4 text-[#1E3A8A]/70">
                  <p>
                    Palugada Digital lahir dari visi untuk membantu bisnis Indonesia dalam mengoptimalkan teknologi.
                    Nama "Palugada" yang berarti "apa lu mau gua ada" mencerminkan komitmen kami untuk menyediakan
                    solusi teknologi yang komprehensif.
                  </p>
                  <p>
                    Sejak didirikan pada 2020, kami telah membantu puluhan klien dari berbagai industri untuk
                    mengoptimalkan sistem teknologi mereka. Dari instalasi OS hingga dukungan teknis, kami memahami
                    kebutuhan unik setiap bisnis.
                  </p>
                  <p>
                    Tim kami terdiri dari teknisi berpengalaman yang passionate dalam teknologi dan berkomitmen
                    memberikan hasil terbaik untuk setiap project.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600&text=Palugada+Digital+Team"
                  alt="Palugada Digital Team"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#E5E7EB]">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1E3A8A]">Nilai-Nilai Kami</h2>
              <p className="text-xl text-[#1E3A8A]/70 max-w-2xl mx-auto">
                Prinsip-prinsip yang memandu setiap langkah kami dalam memberikan layanan terbaik
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-[#1E3A8A]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[#1E3A8A]/70">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white">
        <div className="container px-4 mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-4">Siap Berkolaborasi dengan Kami?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Mari wujudkan kebutuhan teknologi Anda bersama tim profesional Palugada Digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#1E3A8A] hover:bg-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 font-semibold"
                asChild
              >
                <Link href="/booking">Mulai Konsultasi</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 font-semibold"
                asChild
              >
                <Link href="/layanan">Lihat Layanan</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
