"use client"

import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Emagrecimento saudável",
    text: "A Alissia transformou minha relação com a comida. Perdi 12kg sem dietas restritivas, com um plano que se encaixou perfeitamente na minha rotina.",
    rating: 5,
  },
  {
    name: "Rafael Costa",
    role: "Performance esportiva",
    text: "Desde que comecei o acompanhamento nutricional, meu rendimento nos treinos melhorou muito. Ela entende exatamente o que cada atleta precisa.",
    rating: 5,
  },
  {
    name: "Juliana Martins",
    role: "Nutrição gestacional",
    text: "Me senti super acolhida durante toda a gravidez. O plano nutricional foi perfeito para mim e para o bebê. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Acompanhamento clínico",
    text: "Excelente profissional. Me ajudou a controlar meus exames de sangue apenas com a alimentação. Muito atenciosa e técnica.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Reeducação alimentar",
    text: "O atendimento da Alissia é humanizado e sem julgamentos. Aprendi que comer bem pode ser prazeroso e simples.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    role: "Ganho de massa muscular",
    text: "Resultados incríveis em pouco tempo. O plano é muito bem detalhado e fácil de seguir, mesmo com a correria do dia a dia.",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="depoimentos" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto">
          <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Depoimentos
          </span>
          <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-balance">
              O que dizem meus{" "}
              <span className="italic text-primary">pacientes</span>
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="mt-16 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-stretch">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl bg-card border border-border p-8 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 w-full flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Quote className="h-8 w-8 text-primary/20 shrink-0" />

      {/* Stars */}
      <div className="mt-4 flex gap-1 shrink-0">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="mt-4 text-base leading-relaxed text-muted-foreground italic flex-grow">
        {`"${testimonial.text}"`}
      </p>

      <div className="mt-6 flex items-center gap-3 shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
