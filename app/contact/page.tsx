"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Headphones,
  Users,
  Building,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      description: "Hubungi kami langsung",
      value: "+62 812-3456-7890",
      action: "tel:+6281234567890",
      available: "24/7",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat langsung dengan tim",
      value: "+62 812-3456-7890",
      action: "https://wa.me/6281234567890",
      available: "24/7",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Kirim email ke kami",
      value: "hello@palugadadigital.com",
      action: "mailto:hello@palugadadigital.com",
      available: "Respon dalam 24 jam",
    },
  ];

  // const departments = [
  //   {
  //     icon: Users,
  //     name: "Sales & Konsultasi",
  //     email: "sales@palugadadigital.com",
  //     description: "Untuk konsultasi project dan penawaran",
  //   },
  //   {
  //     icon: Headphones,
  //     name: "Technical Support",
  //     email: "support@palugadadigital.com",
  //     description: "Bantuan teknis dan troubleshooting",
  //   },
  //   {
  //     icon: Building,
  //     name: "Partnership",
  //     email: "partnership@palugadadigital.com",
  //     description: "Kerjasama bisnis dan kemitraan",
  //   },
  // ]

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan project?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas project. Instalasi OS 1-2 hari, setup software 1 hari, support sesuai kebutuhan.",
    },
    {
      question: "Apakah ada garansi untuk layanan yang dikerjakan?",
      answer:
        "Ya, kami memberikan garansi 6 bulan untuk instalasi dan 1 tahun untuk maintenance.",
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer:
        "Pembayaran dapat dilakukan secara bertahap: 50% DP, 50% setelah selesai.",
    },
    {
      question: "Apakah bisa konsultasi gratis?",
      answer:
        "Ya, konsultasi awal gratis untuk membahas kebutuhan dan scope project Anda.",
    },
    {
      question: "Apakah melayani area luar Bekasi?",
      answer:
        "Ya, kami melayani seluruh area Jabodetabek dan sekitarnya. Untuk area luar, akan ada biaya transportasi tambahan.",
    },
    {
      question: "Bagaimana cara booking layanan?",
      answer:
        "Anda bisa booking melalui WhatsApp, telepon, atau mengisi form di halaman booking kami.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-20 mt-20">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Siap membantu mewujudkan kebutuhan teknologi Anda. Hubungi tim
              ahli kami sekarang juga!
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-16">
        {/* Contact Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1E3A8A]">
              Cara Menghubungi Kami
            </h2>
            <p className="text-[#1E3A8A]/70 max-w-2xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim
              kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg "
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#1E3A8A]">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-[#1E3A8A]/70">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2 text-[#1E3A8A]">
                    {method.value}
                  </p>
                  <p className="text-sm text-[#1E3A8A]/60 mb-4">
                    {method.available}
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 text-white shadow-lg"
                    asChild
                  >
                    <a
                      href={method.action}
                      target={
                        method.action.startsWith("http") ? "_blank" : "_self"
                      }
                    >
                      Hubungi Sekarang
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            {/* Office Location */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                  <MapPin className="h-5 w-5" />
                  Lokasi Kantor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1E3A8A]">Bekasi</h4>
                  <p className="text-sm text-[#1E3A8A]/70 mt-1">
                    Jalan Pisang Batu Kerta Mukti
                  </p>
                  <p className="text-sm text-[#1E3A8A]/70">
                    Cibitung, Kabupaten Bekasi
                  </p>
                  <p className="text-sm text-[#1E3A8A] mt-2">
                    +62 812-3456-7890
                  </p>
                  <p className="text-sm text-[#1E3A8A]">
                    hello@palugadadigital.com
                  </p>
                  <p className="text-xs text-[#1E3A8A]/60 mt-2">
                    Senin - Jumat: 09:00 - 18:00
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Departments */}
            {/* <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1E3A8A]">Departemen</CardTitle>
                <CardDescription className="text-[#1E3A8A]/70">Hubungi departemen yang sesuai</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <dept.icon className="h-5 w-5 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-[#1E3A8A]">{dept.name}</h4>
                      <p className="text-xs text-[#1E3A8A]/70 mb-1">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-xs text-[#3B82F6] hover:underline">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card> */}
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section id="faq" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1E3A8A]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#1E3A8A]/70 max-w-2xl mx-auto">
              Pertanyaan yang sering diajukan oleh klien kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-[#E5E7EB]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#1E3A8A] pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-[#1E3A8A] transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-[#E5E7EB] pt-4">
                      <p className="text-[#1E3A8A]/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section>
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#1E3A8A]">Lokasi Kami</CardTitle>
              <CardDescription className="text-[#1E3A8A]/70">
                Kunjungi kantor kami di Bekasi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.app.goo.gl/Vnte4a6ELzAwKaZ86"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="border-0 w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Memulai Project Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim ahli kami siap membantu
            mewujudkan kebutuhan teknologi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#1E3A8A] hover:bg-[#E5E7EB] shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
              asChild
            >
              <a href="tel:+6281234567890">
                <Phone className="mr-2 h-4 w-4" />
                Telepon Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
