"use client"

import Link from "next/link"
import { ArrowRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/ui/video-background"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useState, useRef } from "react"

/**
 * @typedef {Object} HeroSectionProps
 * @property {string=} title
 * @property {string=} subtitle
 * @property {string=} description
 * @property {{ text: string, href: string }=} primaryCTA
 * @property {{ text: string, href: string }=} secondaryCTA
 * @property {Array<{ value: string, label: string, gradient: string }>=} stats
 * @property {boolean=} showVideoControls
 */

export function HeroSection({
  title = "Solusi Digital",
  subtitle = "Terpadu",
  description = "Palugada Digital hadir untuk memberikan solusi teknologi terbaik bagi bisnis Anda. Dari website hingga aplikasi mobile, kami siap membantu.",
  primaryCTA = {
    text: "Mulai Konsultasi",
    href: "/booking",
  },
  secondaryCTA = {
    text: "Lihat Layanan",
    href: "/layanan",
  },
  stats = [
    {
      value: "100+",
      label: "Project Selesai",
      gradient: "from-[#3640F0] to-[#64FFE3]",
    },
    {
      value: "50+",
      label: "Client Puas",
      gradient: "from-[#64FFE3] to-[#3640F0]",
    },
    {
      value: "5★",
      label: "Rating",
      gradient: "from-[#3640F0] to-[#64FFE3]",
    },
  ],
  showVideoControls = false,
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    const video = videoRef.current?.querySelector("video")
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <VideoBackground
      src="/videos/blackhole.webm"
      className="min-h-screen flex items-center justify-center"
      overlayOpacity={0.75}
      position="top-shifted"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Video Controls */}
          {showVideoControls && (
            <ScrollReveal direction="fade" delay={200}>
              <div className="flex justify-center mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleVideo}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? "Pause" : "Play"}
                </Button>
              </div>
            </ScrollReveal>
          )}

          {/* Title */}
          <ScrollReveal direction="up" delay={300}>
            <div className="space-y-6 mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                {title}
                <span className="bg-gradient-to-r from-[#64FFE3] to-[#3640F0] bg-clip-text text-transparent block mt-2">
                  {subtitle}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">{description}</p>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3640F0] to-[#64FFE3] hover:from-[#3640F0]/90 hover:to-[#64FFE3]/90 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href={primaryCTA.href}>
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal direction="up" delay={700}>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </VideoBackground>
  )
}
