"use client"

import Image from "next/image"
import { Award, GraduationCap, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const credentials = [
  {
    icon: GraduationCap,
    title: "Formacao",
    description: "Graduada em Nutrição pela UFMG, com especializacao em Nutrição Funcional e Comportamental",
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "+2 anos de experiência em atendimento clínico personalizado, presencial e online",
  },
  {
    icon: Heart,
    title: "Abordagem",
    description: "Nutrição integrativa com foco em saúde, bem-estar e qualidade de vida",
  },
]

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ rootMargin: "0px 0px -100px 0px" })

  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className={`relative transition-all duration-1000 ${imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/alissia-rachel-2.jpg"
                alt="Alissia Rachel, nutricionista"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-xl border border-border md:p-8">
              <p className="text-4xl font-serif font-bold text-primary">+500</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pacientes atendidos
              </p>
            </div>
          </div>

          {/* Content */}
          <div ref={sectionRef}>
            <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Sobre mim
            </span>
            <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="text-balance">
                Sua saúde merece uma{" "}
                <span className="italic text-primary">atencao especial</span>
              </span>
            </h2>
            <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Sou a Alissia Rachel, nutricionista formada pela UFMG, de Belo Horizonte - MG.
              Apaixonada por transformar a relação das pessoas com a alimentação.
              Acredito que comer bem vai muito além de contar calorias — é sobre
              nutrir corpo e mente com consciência e prazer.
            </p>
            <p className={`mt-4 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Minha abordagem é individualizada, respeitando sua rotina, preferências
              e objetivos para criar um plano que realmente funcione para você.
              Atendo presencialmente em Belo Horizonte e online para todo o Brasil.
            </p>

            <div className={`mt-10 flex flex-col gap-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {credentials.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
