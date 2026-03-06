"use client"

import { CheckCircle2, Phone, Smile, Smartphone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
    {
        icon: CheckCircle2,
        title: "Sem Dietas Restritivas",
        description: "Nada de proibições desnecessárias. Focamos em equilíbrio e consciência alimentar.",
    },
    {
        icon: Smartphone,
        title: "App de Acompanhamento",
        description: "Acesso total ao seu plano, receitas e chat direto pelo aplicativo exclusivo.",
    },
    {
        icon: Smile,
        title: "Atendimento Humanizado",
        description: "Escuta ativa e sem julgamentos. Você é o protagonista da sua mudança.",
    },
    {
        icon: Phone,
        title: "Suporte VIP WhatsApp",
        description: "Dúvidas e suporte direto comigo entre as consultas para garantir seus resultados.",
    },
]

export function Differentials() {
    const { ref: sectionRef, isVisible } = useScrollAnimation()

    return (
        <section id="diferenciais" className="py-24 lg:py-32 bg-primary/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    <div ref={sectionRef}>
                        <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Diferenciais
                        </span>
                        <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Por que escolher o <span className="italic text-primary">meu atendimento?</span>
                        </h2>
                        <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Minha missão é proporcionar uma nutrição descomplicada, onde você alcança
                            seus objetivos sem sacrificar os momentos de prazer.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`p-6 rounded-2xl bg-card border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                                    }`}
                                style={{ transitionDelay: `${400 + index * 100}ms` }}
                            >
                                <feature.icon className="h-6 w-6 text-primary mb-4" />
                                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
