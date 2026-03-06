"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    number: "01",
    title: "Consulta Nutricional",
    description:
      "Avaliação completa do seu estado nutricional, composição corporal e hábitos alimentares para criar um plano personalizado.",
    image: "/images/service-consultation.jpg",
    alt: "Consulta nutricional personalizada",
  },
  {
    number: "02",
    title: "Plano Alimentar",
    description:
      "Cardápio individualizado e prático, adaptado à sua rotina, preferências e objetivos de saúde.",
    image: "/images/service-mealplan.jpg",
    alt: "Plano alimentar personalizado",
  },
  {
    number: "03",
    title: "Acompanhamento Contínuo",
    description:
      "Suporte constante com ajustes periódicos, monitoramento de evolução e orientação nutricional permanente.",
    image: "/images/service-wellness.jpg",
    alt: "Acompanhamento nutricional contínuo",
  },
]

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto">
          <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Servicos
          </span>
          <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-balance">
              Uma abordagem completa para sua{" "}
              <span className="italic text-primary">saúde</span>
            </span>
          </h2>
          <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Cada jornada é única. Conheça os serviços que vão te ajudar a
            alcançar seus objetivos de forma sustentável.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-300 group-hover:opacity-0" />
        <span className="absolute top-4 left-4 rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-foreground">
          {service.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-serif font-bold text-foreground">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <a
          href="#contato"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}
