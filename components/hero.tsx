"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-alissia.png"
          alt="Mesa de nutricionista com alimentos saudaveis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/55 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <div
              className={`transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <span className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
                Nutricionista - Belo Horizonte, MG
              </span>
            </div>

            <h1
              className={`mt-8 font-serif text-5xl font-bold leading-tight tracking-tight text-primary-foreground md:text-7xl lg:text-8xl transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <span className="text-balance">
                Alissia{" "}
                <span className="italic">Rachel</span>
              </span>
            </h1>

            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl transition-all duration-1000 delay-600 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Transforme sua relação com a alimentação. Nutrição funcional e
              comportamental para quem busca saúde, equilíbrio e bem-estar
              de forma leve e personalizada. Atendimento presencial em BH
              e online para todo o Brasil.
            </p>

            <div
              className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-[800ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-base"
                asChild
              >
                <a href="#contato">Agendar Consulta</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href="#sobre">Conhecer Mais</a>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-700 order-first lg:order-none ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 lg:translate-x-12"
              }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-primary/30 blur-2xl" />
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-primary-foreground/20 shadow-2xl xl:h-96 xl:w-96">
                <Image
                  src="/images/alissia-rachel.jpg"
                  alt="Alissia Rachel, nutricionista"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
