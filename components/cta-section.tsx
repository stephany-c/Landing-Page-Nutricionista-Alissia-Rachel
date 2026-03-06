"use client"

import { Phone, Mail, MapPin, Clock, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(31) 99999-9999",
    href: "tel:+5531999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@alissiarachel.com.br",
    href: "mailto:contato@alissiarachel.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Belo Horizonte, MG - Presencial e Online",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex, 8h às 18h",
    href: "#",
  },
]

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Info */}
          <div ref={ref}>
            <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Contato
            </span>
            <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="text-balance">
                Vamos conversar sobre sua{" "}
                <span className="italic text-primary">saúde</span>?
              </span>
            </h2>
            <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Agende sua consulta e dê o primeiro passo para uma vida
              mais saudável. Atendimento presencial e online.
            </p>

            <div className={`mt-10 flex flex-col gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className={`mt-10 flex gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
                aria-label="WhatsApp"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div
            ref={formRef}
            className={`rounded-2xl bg-card border border-border p-8 lg:p-10 transition-all duration-700 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-xl font-serif font-bold text-foreground">
              Agende sua consulta
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha o formulário e entrarei em contato com você.
            </p>

            <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Conte-me sobre seus objetivos..."
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                />
              </div>
              <Button type="submit" size="lg" className="mt-2 rounded-xl w-full text-base">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
