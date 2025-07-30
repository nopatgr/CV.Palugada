import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

export default function ProdukPage() {
  const products = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "Web Application",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, inventory management, dan dashboard admin.",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Responsive"],
      price: "Mulai dari Rp 15.000.000",
      rating: 4.9,
      clients: 25,
    },
    {
      id: 2,
      name: "Company Profile Website",
      category: "Website",
      description: "Website company profile profesional dengan desain modern dan SEO optimized.",
      image: "/placeholder.svg?height=300&width=400&text=Company+Profile",
      features: ["SEO Optimized", "Mobile Responsive", "CMS Integration", "Contact Forms"],
      price: "Mulai dari Rp 5.000.000",
      rating: 4.8,
      clients: 50,
    },
    {
      id: 3,
      name: "Mobile App Development",
      category: "Mobile Application",
      description: "Aplikasi mobile native untuk iOS dan Android dengan performa optimal.",
      image: "/placeholder.svg?height=300&width=400&text=Mobile+App",
      features: ["Cross Platform", "Push Notifications", "Offline Support", "App Store Ready"],
      price: "Mulai dari Rp 25.000.000",
      rating: 4.9,
      clients: 15,
    },
  ]

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-20 mt-20">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Produk Kami</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Berbagai solusi digital yang telah kami kembangkan untuk membantu bisnis berkembang
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} direction="up" delay={index * 200}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-[#1E3A8A]/10 text-[#1E3A8A]">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-[#1E3A8A]">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-[#1E3A8A]">{product.name}</CardTitle>
                    <CardDescription className="text-base text-[#1E3A8A]/70">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-[#1E3A8A]">Fitur Utama:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="text-xs border-[#1E3A8A]/20 text-[#1E3A8A]/70"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-[#1E3A8A]/60">
                      <span>{product.clients} klien menggunakan</span>
                    </div>

                    <div className="space-y-3">
                      <div className="text-lg font-bold text-[#3B82F6]">{product.price}</div>
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 text-white shadow-lg"
                          asChild
                        >
                          <Link href="/booking">Pesan Sekarang</Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#1E3A8A]/10 bg-transparent"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
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
