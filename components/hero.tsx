"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown, Heart, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/5 hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-20 h-20 rounded-full bg-primary/5 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 w-full">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <div
              className={`transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                NUTRIÇÃO CLÍNICA • CRN 35314/P
              </span>
            </div>

            <h1
              className={`mt-8 font-serif text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="block">Apaixone-se por</span>
              <span className="block italic text-primary">cuidar</span>
              <span className="block">de si mesmo</span>
            </h1>

            <p
              className={`mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Alcance seus objetivos e transforme sua relação com a alimentação. 
              Atendimento presencial em Belo Horizonte e consultas online para todo o Brasil.
            </p>

            <div
              className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-[800ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-medium tracking-wide"
                asChild
              >
                <a href="#contato">
                  AGENDAR CONSULTA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent px-8 text-sm font-medium tracking-wide text-foreground hover:bg-muted"
                asChild
              >
                <a href="#sobre">
                  SAIBA MAIS
                  <ChevronDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`mt-12 pt-8 border-t border-border flex items-center gap-8 transition-all duration-1000 delay-[1000ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div>
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl">+1000</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Pacientes</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl">UFMG</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Formação</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl">Online</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">& Presencial</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="relative">
              {/* Floating card top */}
              <div className="absolute -top-4 -right-4 z-20 bg-background rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <ClipboardList className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">PLANO ALIMENTAR</p>
                  <p className="text-[10px] text-muted-foreground">PERSONALIZADO</p>
                </div>
              </div>

              {/* Main image */}
              <div className="relative h-[400px] w-[320px] md:h-[500px] md:w-[400px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/alissia-rachel.jpg"
                  alt="Alissia Rachel, nutricionista"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Floating card bottom */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Nutrição Humanizada</p>
                  <p className="text-[10px] text-muted-foreground">Cuidado individualizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
