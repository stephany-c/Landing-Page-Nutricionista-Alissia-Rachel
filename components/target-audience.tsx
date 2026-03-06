"use client"

import { Target, Swords, User, Coffee } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const audiences = [
    {
        icon: Target,
        title: "Emagrecimento",
        description: "Para quem busca perder peso com saúde, sem dietas malucas e mantendo o prazer de comer.",
    },
    {
        icon: Swords,
        title: "Performance",
        description: "Foco em otimizar seus treinos, melhorar a recuperação e alcançar seus objetivos de rendimento.",
    },
    {
        icon: User,
        title: "Saúde da Mulher",
        description: "Cuidado especializado para SOP, endometriose, menopausa e acompanhamento gestacional.",
    },
    {
        icon: Coffee,
        title: "Reeducação",
        description: "Melhore sua relação com a comida, acabe com a fome emocional e tenha mais energia no dia a dia.",
    },
]

export function TargetAudience() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

    return (
        <section id="publico-alvo" className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
                    <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Para quem é
                    </span>
                    <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Encontre o seu <span className="italic text-primary">objetivo</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {audiences.map((item, index) => (
                        <AudienceCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function AudienceCard({
    item,
    index,
}: {
    item: (typeof audiences)[number]
    index: number
}) {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            className={`group p-8 rounded-3xl bg-secondary border border-transparent hover:border-primary/20 transition-all duration-700 hover:bg-card hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </div>
    )
}
