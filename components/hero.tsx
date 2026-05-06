"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown, Heart, ClipboardList, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-primary/20 rounded-full animate-float delay-500" />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 bg-accent/30 rounded-full animate-float delay-1000" />
        <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-primary/40 rounded-full animate-float delay-700" />
        <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-primary/25 rounded-full animate-float delay-300" />
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-primary/10 hidden lg:block animate-spin-slow" />
      <div className="absolute top-24 right-24 w-24 h-24 rounded-full border border-primary/20 hidden lg:block animate-spin-slow-reverse" />
      <div className="absolute bottom-40 right-40 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent hidden lg:block" />
      <div className="absolute top-40 left-10 w-16 h-16 rounded-full border border-primary/10 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-tr from-accent/5 to-transparent hidden lg:block blur-2xl" />

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 100px,
          currentColor 100px,
          currentColor 101px
        )`
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 w-full">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <div
              className={`transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-primary border border-primary/10 shadow-sm">
                <Sparkles className="w-4 h-4" />
                NUTRICIONISTA CLÍNICA • CRN 35314/P
              </span>
            </div>

            <h1
              className={`mt-8 font-serif text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Apaixone-se por</span>
              <span className="block italic bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">cuidar</span>
              <span className="block bg-gradient-to-r from-foreground/80 to-foreground bg-clip-text">de si mesmo</span>
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
                className="rounded-full px-8 text-sm font-medium tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
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
                className="rounded-full border-border bg-background/50 backdrop-blur-sm px-8 text-sm font-medium tracking-wide text-foreground hover:bg-background hover:border-primary/30 transition-all duration-300 hover:scale-105"
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
              className={`mt-12 pt-8 border-t border-border/50 flex items-center gap-8 transition-all duration-1000 delay-[1000ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="group cursor-default">
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl group-hover:text-primary transition-colors">+1000</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Pacientes</p>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="group cursor-default">
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl group-hover:text-primary transition-colors">UFMG</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Formação</p>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="group cursor-default">
                <p className="font-serif text-2xl font-light text-foreground md:text-3xl group-hover:text-primary transition-colors">Online</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">& Presencial</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
          >
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Floating card top */}
              <div className="absolute -top-4 -right-4 z-20 bg-background/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-border/50 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">PLANO ALIMENTAR</p>
                  <p className="text-[10px] text-muted-foreground">PERSONALIZADO</p>
                </div>
              </div>

              {/* Main image container */}
              <div className="relative h-[400px] w-[320px] md:h-[520px] md:w-[420px] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-border/10">
                {/* Image gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-10" />
                
                <Image
                  src="/images/alissia-rachel.jpg"
                  alt="Alissia Rachel, nutricionista"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating card bottom */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-background/90 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-border/50 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Nutrição Humanizada</p>
                  <p className="text-[10px] text-muted-foreground">Cuidado individualizado</p>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-2 border-dashed border-primary/10 animate-spin-slow hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
