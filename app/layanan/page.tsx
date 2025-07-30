import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import {
  Monitor,
  Settings,
  Headphones,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function LayananPage() {
  const services = [
    {
      id: "os-installation",
      icon: Monitor,
      title: "OS Installation",
      description:
        "Instalasi sistem operasi Windows, macOS, dan Linux dengan konfigurasi optimal untuk kebutuhan bisnis Anda.",
      features: [
        "Windows 10/11 Installation",
        "macOS Setup & Configuration",
        "Linux Distribution Setup",
        "Driver Installation",
        "System Optimization",
        "Security Configuration",
      ],
      startingPrice: "Rp 500.000",
      duration: "1-2 hari",
      popular: false,
    },
    {
      id: "software-setup",
      icon: Settings,
      title: "Software Setup",
      description:
        "Setup dan konfigurasi software aplikasi sesuai kebutuhan bisnis dengan training dan dokumentasi lengkap.",
      features: [
        "Business Software Installation",
        "Application Configuration",
        "User Account Setup",
        "Training & Documentation",
        "License Management",
        "Performance Optimization",
      ],
      startingPrice: "Rp 300.000",
      duration: "1 hari",
      popular: true,
    },
    {
      id: "tech-support",
      icon: Headphones,
      title: "Tech Support",
      description:
        "Dukungan teknis 24/7 untuk troubleshooting, maintenance sistem, dan konsultasi teknologi.",
      features: [
        "24/7 Technical Support",
        "Remote Troubleshooting",
        "System Maintenance",
        "Hardware Diagnostics",
        "Network Configuration",
        "Data Recovery Services",
      ],
      startingPrice: "Rp 200.000/jam",
      duration: "On-demand",
      popular: false,
    },
    {
      id: "consultation",
      icon: Palette,
      title: "IT Consultation",
      description:
        "Konsultasi teknologi untuk strategi IT, pemilihan hardware/software, dan digital transformation.",
      features: [
        "IT Strategy Planning",
        "Technology Assessment",
        "Hardware Recommendation",
        "Software Selection",
        "Digital Transformation",
        "Cost Optimization",
      ],
      startingPrice: "Rp 1.000.000",
      duration: "2-3 hari",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-20 mt-20">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Layanan Kami
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Solusi teknologi komprehensif untuk mendukung operasional bisnis
                Anda dengan layanan profesional
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={index * 200}>
                <Card
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white ${
                    service.popular ? "ring-2 ring-[#3B82F6]" : ""
                  }`}
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-[#3B82F6] text-white">
                      Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#1E3A8A]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-[#1E3A8A]/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#3B82F6] flex-shrink-0" />
                          <span className="text-sm text-[#1E3A8A]/70">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[#E5E7EB]">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#1E3A8A]/60">
                          Mulai dari:
                        </span>
                        <span className="font-bold text-[#3B82F6]">
                          {service.startingPrice}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#1E3A8A]/60">
                          Durasi:
                        </span>
                        <span className="font-medium text-[#1E3A8A]">
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href={`/booking?service=${service.id}`}>
                        Pesan Layanan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#1E3A8A]">
                Mengapa Memilih Layanan Kami?
              </h2>
              <p className="text-xl text-[#1E3A8A]/70 max-w-2xl mx-auto">
                Komitmen kami untuk memberikan layanan teknologi terbaik dengan
                standar profesional
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Teknisi Bersertifikat",
                description:
                  "Tim teknisi kami memiliki sertifikasi internasional dan pengalaman bertahun-tahun",
                gradient: "from-[#1E3A8A] to-[#3B82F6]",
              },
              {
                icon: Headphones,
                title: "Support 24/7",
                description:
                  "Dukungan teknis tersedia 24 jam sehari, 7 hari seminggu untuk kebutuhan mendesak",
                gradient: "from-[#3B82F6] to-[#1E3A8A]",
              },
              {
                icon: Settings,
                title: "Garansi Layanan",
                description:
                  "Semua layanan dilengkapi garansi dan after-sales support untuk kepuasan Anda",
                gradient: "from-[#1E3A8A] to-[#3B82F6]",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div
                      className={`mx-auto w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#1E3A8A]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[#1E3A8A]/70">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white">
        <div className="container px-4 mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Bantuan Teknologi?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Konsultasikan kebutuhan teknologi Anda dengan tim ahli kami.
              Dapatkan solusi terbaik untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#1E3A8A] hover:bg-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 font-semibold"
                asChild
              >
                <Link href="/booking">Konsultasi Gratis</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 font-semibold"
                asChild
              >
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
