import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Star, Quote } from "lucide-react"

export default function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Bersama",
      avatar: "/placeholder.svg?height=60&width=60&text=BS",
      rating: 5,
      service: "OS Installation",
      testimonial:
        "Palugada Digital berhasil menginstall dan mengkonfigurasi sistem operasi dengan sangat profesional. Tim mereka sangat responsif dan memahami kebutuhan bisnis kami. Highly recommended!",
      project: "Windows Server Installation",
      completedAt: "Januari 2024",
    },
    {
      id: 2,
      name: "Sari Dewi",
      position: "IT Manager",
      company: "Toko Online Berkah",
      avatar: "/placeholder.svg?height=60&width=60&text=SD",
      rating: 5,
      service: "Software Setup",
      testimonial:
        "Setup software yang dilakukan sangat user-friendly dan fitur-fiturnya lengkap. Produktivitas tim kami meningkat 200% setelah menggunakan konfigurasi ini.",
      project: "Business Software Configuration",
      completedAt: "Februari 2024",
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      position: "Founder",
      company: "EduTech Indonesia",
      avatar: "/placeholder.svg?height=60&width=60&text=AR",
      rating: 5,
      service: "Tech Support",
      testimonial:
        "Dukungan teknis yang diberikan sangat responsif dan profesional. Masalah sistem kami terselesaikan dengan cepat dan tidak mengganggu operasional bisnis.",
      project: "24/7 Technical Support",
      completedAt: "Maret 2024",
    },
  ]

  const stats = [
    { label: "Total Klien", value: "50+" },
    { label: "Project Selesai", value: "100+" },
    { label: "Rating Rata-rata", value: "4.9/5" },
    { label: "Client Retention", value: "95%" },
  ]

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-20 mt-20">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Testimonial Klien</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Kepuasan klien adalah prioritas utama kami. Lihat apa kata mereka tentang layanan kami.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#3B82F6] mb-2">{stat.value}</div>
                  <div className="text-[#1E3A8A]/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} direction="up" delay={index * 200}>
                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-[#1E3A8A] text-white">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg text-[#1E3A8A]">{testimonial.name}</CardTitle>
                          <CardDescription className="text-[#1E3A8A]/70">
                            {testimonial.position} at {testimonial.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-[#3B82F6] opacity-50" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#1E3A8A]/60">({testimonial.rating}/5)</span>
                    </div>

                    <Badge variant="secondary" className="w-fit bg-[#1E3A8A]/10 text-[#1E3A8A]">
                      {testimonial.service}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-[#1E3A8A]/70 leading-relaxed">"{testimonial.testimonial}"</p>

                    <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#1E3A8A]/60">Project:</span>
                        <span className="font-medium text-[#1E3A8A]">{testimonial.project}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#1E3A8A]/60">Selesai:</span>
                        <span className="font-medium text-[#1E3A8A]">{testimonial.completedAt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
