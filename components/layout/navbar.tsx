"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../ThemeToggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const services = [
    { title: "OS Installation", href: "/layanan#os-installation" },
    { title: "Software Setup", href: "/layanan#software-setup" },
    { title: "Tech Support", href: "/layanan#tech-support" },
  ]

  const pages = [
    { title: "Produk", href: "/produk" },
    { title: "Layanan", href: "/layanan" },
    { title: "Testimonial", href: "/testimonial" },
    { title: "Contact", href: "/contact" },
    { title: "Booking", href: "/booking" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        setIsScrolled(currentScrollY > 50)

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-xl"
          : "bg-white/90 backdrop-blur-sm border-b border-white/20"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">PD</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors">
              Palugada Digital
            </span>
            <span className="text-xs text-gray-500 font-medium">Tech Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-[#1E3A8A] hover:text-[#3B82F6] transition-all duration-300 rounded-lg hover:bg-[#E5E7EB]/50">
              <span>Services</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-3">
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-center px-4 py-3 text-sm text-[#1E3A8A] hover:bg-[#E5E7EB]/70 hover:text-[#3B82F6] rounded-lg transition-all duration-200 group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3 opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="px-4 py-2 text-sm font-semibold text-[#1E3A8A] hover:text-[#3B82F6] transition-all duration-300 rounded-lg hover:bg-[#E5E7EB]/50"
          >
            About
          </Link>

          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-[#1E3A8A] hover:text-[#3B82F6] transition-all duration-300 rounded-lg hover:bg-[#E5E7EB]/50">
              <span>Pages</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-3">
                {pages.map((page) => (
                  <Link
                    key={page.title}
                    href={page.href}
                    className="flex items-center px-4 py-3 text-sm text-[#1E3A8A] hover:bg-[#E5E7EB]/70 hover:text-[#3B82F6] rounded-lg transition-all duration-200 group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3 opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Button
            className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2 rounded-lg font-semibold"
            asChild
          >
            <Link href="/booking">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-[#E5E7EB]/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6 text-[#1E3A8A]" /> : <Menu className="h-6 w-6 text-[#1E3A8A]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
          <div className="container px-6 py-6 space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-[#1E3A8A]">Services</h4>
              <div className="space-y-2 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block text-sm text-[#1E3A8A]/70 hover:text-[#3B82F6] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block font-semibold text-[#1E3A8A] hover:text-[#3B82F6] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div>
              <h4 className="font-semibold mb-3 text-[#1E3A8A]">Pages</h4>
              <div className="space-y-2 pl-4">
                {pages.map((page) => (
                  <Link
                    key={page.title}
                    href={page.href}
                    className="block text-sm text-[#1E3A8A]/70 hover:text-[#3B82F6] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>

            <Button
              className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/90 w-full shadow-lg font-semibold"
              asChild
            >
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
             <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          
          </div>
          </div>
        </div>
      )}
    </header>
  )
}
