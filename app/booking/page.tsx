"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // interface BookingFormData {
  //   name: string;
  //   email: string;
  //   phone: string;
  //   company: string;
  //   service: string;
  //   description: string;
  // }

  // interface BookingApiResponse {
  //   success: boolean;
  //   whatsappUrl: string;
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setWhatsappUrl(result.whatsappUrl);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          description: "",
        });
      } else {
        alert("Gagal mengirim booking. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleEmailRedirect = () => {
    const emailSubject = encodeURIComponent(
      `Booking Konsultasi - ${formData.service}`
    );
    const emailBody = encodeURIComponent(`Halo Palugada Digital,

Saya ingin booking konsultasi dengan detail:

Nama: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Perusahaan: ${formData.company || "Tidak disebutkan"}
Layanan: ${formData.service}

Deskripsi Project:
${formData.description}

Mohon informasi lebih lanjut. Terima kasih!`);

    window.open(
      `mailto:hello@palugadadigital.com?subject=${emailSubject}&body=${emailBody}`,
      "_self"
    );
  };

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-20 mt-20">
        <div className="container px-4 mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Booking Konsultasi
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Konsultasikan kebutuhan teknologi Anda dengan tim ahli kami.
                Gratis dan tanpa komitmen!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container px-4 mx-auto py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <ScrollReveal direction="left">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                    <MessageCircle className="h-5 w-5" />
                    Hubungi Kami
                  </CardTitle>
                  <CardDescription className="text-[#1E3A8A]/70">
                    Tim kami siap membantu Anda 24/7
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#3B82F6]" />
                    <div>
                      <div className="font-medium text-[#1E3A8A]">WhatsApp</div>
                      <div className="text-sm text-[#1E3A8A]/70">
                        +62 812-3456-7890
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#3B82F6]" />
                    <div>
                      <div className="font-medium text-[#1E3A8A]">Email</div>
                      <div className="text-sm text-[#1E3A8A]/70">
                        hello@palugadadigital.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#3B82F6]" />
                    <div>
                      <div className="font-medium text-[#1E3A8A]">Alamat</div>
                      <div className="text-sm text-[#1E3A8A]/70">
                        Jalan Pisang Batu Kerta Mukti
                      </div>
                      <div className="text-sm text-[#1E3A8A]/70">
                        Cibitung, Kabupaten Bekasi
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-[#3B82F6]" />
                    <div>
                      <div className="font-medium text-[#1E3A8A]">
                        Jam Operasional
                      </div>
                      <div className="text-sm text-[#1E3A8A]/70">
                        Senin - Jumat: 09:00 - 18:00
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              {isSubmitted ? (
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-6">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E3A8A]">
                          Booking Berhasil Dikirim!
                        </h3>
                        <p className="text-[#1E3A8A]/70 mt-2">
                          Terima kasih telah booking konsultasi. Pilih cara
                          untuk melanjutkan komunikasi:
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={handleWhatsAppRedirect}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Lanjut ke WhatsApp
                        </Button>
                        <Button
                          onClick={handleEmailRedirect}
                          variant="outline"
                          className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white bg-transparent"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Kirim via Email
                        </Button>
                      </div>

                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setWhatsappUrl("");
                        }}
                        variant="ghost"
                        className="text-[#1E3A8A]/70 hover:text-[#1E3A8A]"
                      >
                        Booking Lain
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-white border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A8A]">
                      Form Konsultasi
                    </CardTitle>
                    <CardDescription className="text-[#1E3A8A]/70">
                      Isi form di bawah ini untuk memulai konsultasi gratis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#1E3A8A]">
                            Nama Lengkap *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#1E3A8A]">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#1E3A8A]">
                            No. WhatsApp *
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            placeholder=""
                            className="border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                            required
                          />
                        </div>
                        {/* <div className="space-y-2">
                          <Label htmlFor="company" className="text-[#1E3A8A]">
                            Nama Perusahaan
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                company: e.target.value,
                              }))
                            }
                            className="border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                          />
                        </div> */}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-[#1E3A8A]">
                          Layanan yang Dibutuhkan
                        </Label>
                        <Input
                          id="service"
                          value={formData.service}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              service: e.target.value,
                            }))
                          }
                          placeholder="OS Installation, Software Setup, Tech Support, dll"
                          className="border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-[#1E3A8A]">
                          Deskripsi Project *
                        </Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          placeholder="Jelaskan detail project yang Anda inginkan..."
                          rows={4}
                          className="border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                          required
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          type="submit"
                          className=" bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Mengirim..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Kirim Booking
                            </>
                          )}
                        </Button>

                        <Button
                          type="button"
                          onClick={handleEmailRedirect}
                          variant="outline"
                          className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white bg-transparent"
                          size="lg"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Email Langsung
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
