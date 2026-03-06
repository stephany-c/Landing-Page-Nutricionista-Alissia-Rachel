"use client"

import { MessageCircle, ClipboardCheck, Apple, MessageSquareText } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
    {
        icon: MessageCircle,
        title: "Conversa Inicial",
        description: "Anamnese completa para entender sua rotina, histórico de saúde e relação com a comida.",
    },
    {
        icon: ClipboardCheck,
        title: "Avaliação Pro",
        description: "Análise de exames e medidas antropométricas para traçar o seu diagnóstico nutricional.",
    },
    {
        icon: Apple,
        title: "Plano Personalizado",
        description: "Entrega de um cardápio 100% individualizado, focado nos seus gostos e objetivos.",
    },
    {
        icon: MessageSquareText,
        title: "Acompanhamento",
        description: "Suporte contínuo via WhatsApp para tirar dúvidas e manter a motivação em dia.",
    },
]

export function Methodology() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

    return (
        <section id="metodologia" className="py-24 lg:py-32 bg-secondary/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
                    <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Metodologia
                    </span>
                    <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <span className="text-balance">
                            Como funciona o meu{" "}
                            <span className="italic text-primary">acompanhamento</span>
                        </span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-primary/10 -z-10" />

                    {steps.map((step, index) => (
                        <MethodologyStep key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function MethodologyStep({
    step,
    index,
}: {
    step: (typeof steps)[number]
    index: number
}) {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            className={`text-center flex flex-col items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110">
                    <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm border-4 border-background">
                    {index + 1}
                </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </div>
    )
}
