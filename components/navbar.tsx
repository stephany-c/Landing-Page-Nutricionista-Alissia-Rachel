"use client"

import { useState, useEffect } from "react"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = navLinks.map(link => link.href.replace("#", "")).filter(Boolean)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            return
          }
        }
      }
      setActiveSection("")
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileOpen(false)
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-lg shadow-primary/5 border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`} />
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-3 group"
        >
          <div className="relative flex h-11 w-11 items-center justify-center">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:scale-110" />
            {/* Inner circle */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary to-primary/80 transition-transform duration-500 group-hover:scale-95" />
            <Heart className="relative h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-light tracking-tight text-foreground">
              Alissia Rachel
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase">
              Nutricionista
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "") || (link.href === "#" && activeSection === "")
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {/* Active indicator */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
              </a>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            asChild 
            className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <a href="#contato" onClick={(e) => handleNavClick(e, "#contato")}>
              Agendar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          <span className={`absolute transition-all duration-300 ${isMobileOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
            <Menu className="h-5 w-5" />
          </span>
          <span className={`absolute transition-all duration-300 ${isMobileOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}>
            <X className="h-5 w-5" />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-2xl border-t border-primary/10 px-6 pb-8 pt-4">
          {/* Mobile Nav Links */}
          <div className="space-y-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "") || (link.href === "#" && activeSection === "")
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-4 py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                  style={{ 
                    transitionDelay: isMobileOpen ? `${index * 50}ms` : "0ms",
                    transform: isMobileOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isMobileOpen ? 1 : 0
                  }}
                >
                  <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? "bg-primary" : "bg-border"}`} />
                  {link.label}
                </a>
              )
            })}
          </div>
          
          {/* Mobile CTA */}
          <div className="mt-6 pt-6 border-t border-border">
            <Button 
              asChild 
              className="w-full rounded-full py-6 text-base shadow-lg shadow-primary/25"
            >
              <a href="#contato" onClick={(e) => handleNavClick(e, "#contato")}>
                Agendar Consulta
              </a>
            </Button>
          </div>
          
          {/* Mobile Footer Info */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Heart className="h-3 w-3 text-primary" />
            <span>Nutrição Clínica • CRN 35314/P</span>
          </div>
        </div>
      </div>
    </header>
  )
}
