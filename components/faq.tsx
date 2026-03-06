"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
    {
        question: "Você atende convênio?",
        answer: "Atendo exclusivamente de forma particular, mas emito recibo para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde.",
    },
    {
        question: "Como funciona a consulta online?",
        answer: "A consulta online é realizada via vídeo-chamada e tem a mesma duração e qualidade da presencial. O plano alimentar e materiais de apoio são enviados digitalmente e pelo aplicativo.",
    },
    {
        question: "Vou ter que cortar tudo o que eu gosto de comer?",
        answer: "De forma alguma! Minha abordagem foca na reeducação alimentar e equilíbrio. Vamos adaptar sua rotina para incluir o que você gosta de forma consciente.",
    },
    {
        question: "Qual o intervalo entre as consultas?",
        answer: "Geralmente o retorno acontece em 30 dias para os primeiros ajustes, mas a frequência pode variar de acordo com seus objetivos e necessidades individuais.",
    },
    {
        question: "O acompanhamento pelo WhatsApp tem custo extra?",
        answer: "Não! O suporte para dúvidas pelo WhatsApp durante o período do tratamento já está incluso no valor da consulta.",
    },
]

export function FAQ() {
    const { ref: sectionRef, isVisible } = useScrollAnimation()

    return (
        <section id="faq" className="py-24 lg:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div ref={sectionRef} className="text-center mb-16">
                    <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Dúvidas
                    </span>
                    <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Perguntas <span className="italic text-primary">Frequentes</span>
                    </h2>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className={`w-full transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                            <AccordionTrigger className="text-left font-serif text-lg py-6 hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
