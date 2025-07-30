import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const services = [
    { name: "OS Installation", href: "/layanan#os-installation" },
    { name: "Software Setup", href: "/layanan#software-setup" },
    { name: "Tech Support", href: "/layanan#tech-support" },
  ];

  const company = [
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/layanan" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-50 text-[#1E3A8A] border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">PD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[#1E3A8A]">
                  Palugada Digital
                </span>
                <span className="text-sm text-[#1E3A8A]/60">
                  Tech Solutions
                </span>
              </div>
            </Link>
            <p className="text-[#1E3A8A]/70 mb-6 max-w-md leading-relaxed">
              Solusi digital terpadu untuk mengembangkan bisnis Anda. Dari
              instalasi OS hingga dukungan teknis, kami siap membantu mewujudkan
              kebutuhan teknologi Anda.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#1E3A8A]/60" />
                <span className="text-[#1E3A8A]/70">+62 999-999-999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#1E3A8A]/60" />
                <span className="text-[#1E3A8A]/70">
                  hello@palugadadigital.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#1E3A8A]/60 mt-0.5" />
                <span className="text-[#1E3A8A]/70">
                  Jalan Pisang Batu Kerta Mukti
                  <br />
                  Cibitung, Kabupaten Bekasi
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Link
                href="#"
                className="text-[#1E3A8A]/60 hover:text-[#1E3A8A] transition-colors p-2 rounded-lg hover:bg-[#1E3A8A]/10"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#1E3A8A]/60 hover:text-[#1E3A8A] transition-colors p-2 rounded-lg hover:bg-[#1E3A8A]/10"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#1E3A8A]/60 hover:text-[#1E3A8A] transition-colors p-2 rounded-lg hover:bg-[#1E3A8A]/10"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#1E3A8A]/60 hover:text-[#1E3A8A] transition-colors p-2 rounded-lg hover:bg-[#1E3A8A]/10"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#1E3A8A]">
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#1E3A8A]/70 hover:text-[#1E3A8A] transition-colors hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#1E3A8A]">
              Perusahaan
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#1E3A8A]/70 hover:text-[#1E3A8A] transition-colors hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="text-center">
            <div className="text-[#1E3A8A]/60 text-sm">
              © 2025 Palugada Digital. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
