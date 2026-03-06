"use client"

import { useState, useEffect } from "react"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-500 ${isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
            Alissia Rachel
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-full px-6">
            <a href="#contato">Agendar Consulta</a>
          </Button>
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-4 w-full rounded-full">
            <a href="#contato" onClick={() => setIsMobileOpen(false)}>
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
