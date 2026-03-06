"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Clock, Instagram, Send, CheckCircle2, AlertCircle } from "lucide-react"
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Phone mask: (XX) XXXXX-XXXX
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 11) {
      return digits
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
    }
    return digits.slice(0, 11)
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    if (id === "phone") {
      setFormData(prev => ({ ...prev, [id]: formatPhone(value) }))
    } else {
      setFormData(prev => ({ ...prev, [id]: value }))
    }
  }

  const handleBlur = (id: string) => {
    setTouched(prev => ({ ...prev, [id]: true }))
  }

  const getError = (id: string) => {
    if (!touched[id]) return ""
    const value = formData[id as keyof typeof formData]

    if (!value) return "Este campo é obrigatório"

    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return "E-mail inválido"
    }

    if (id === "phone") {
      const digits = value.replace(/\D/g, "")
      if (digits.length < 10) return "Telefone incompleto"
    }

    return ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check for errors
    const hasErrors = Object.keys(formData).some(key => getError(key))
    if (hasErrors) {
      // Mark all fields as touched to show errors
      const allTouched: Record<string, boolean> = {}
      Object.keys(formData).forEach(key => (allTouched[key] = true))
      setTouched(allTouched)
      return
    }

    setIsSubmitting(true)

    // WhatsApp logic
    const phoneNumber = "5531999999999"
    const text = `Olá Alissia! Meu nome é ${formData.name}.
E-mail: ${formData.email}
Telefone: ${formData.phone}

${formData.message}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTouched({})

      setTimeout(() => setIsSuccess(false), 5000)
    }, 800)
  }

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
                href="https://www.instagram.com/alissiarachel?igsh=bXJkOGk5enU3d3ht"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5531999999999?text=Olá Alissia! Vi seu site e gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div
            ref={formRef}
            className={`rounded-2xl bg-card border border-border p-8 lg:p-10 transition-all duration-700 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <h3 className="text-xl font-serif font-bold text-foreground">
              Agende sua consulta
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha o formulário e entrarei em contato com você.
            </p>

            <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="Seu nome"
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${getError("name") ? "border-destructive focus:ring-destructive/20" : "border-input focus:ring-ring"}`}
                />
                {getError("name") && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-300">
                    <AlertCircle className="h-3 w-3" />
                    {getError("name")}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="seu@email.com"
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${getError("email") ? "border-destructive focus:ring-destructive/20" : "border-input focus:ring-ring"}`}
                />
                {getError("email") && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-300">
                    <AlertCircle className="h-3 w-3" />
                    {getError("email")}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur("phone")}
                  placeholder="(31) 99999-9999"
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${getError("phone") ? "border-destructive focus:ring-destructive/20" : "border-input focus:ring-ring"}`}
                />
                {getError("phone") && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-300">
                    <AlertCircle className="h-3 w-3" />
                    {getError("phone")}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  placeholder="Conte-me sobre seus objetivos..."
                  className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${getError("message") ? "border-destructive focus:ring-destructive/20" : "border-input focus:ring-ring"}`}
                />
                {getError("message") && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-300">
                    <AlertCircle className="h-3 w-3" />
                    {getError("message")}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="rounded-xl w-full text-base transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? "Carregando..." : "Enviar Mensagem"}
                </Button>

                {isSuccess && (
                  <div className="flex items-center justify-center gap-2 py-2 px-4 bg-emerald-50 text-emerald-600 rounded-lg animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Redirecionando para o WhatsApp...</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
