"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const results = [
    {
        title: "Emagrecimento Saudável",
        description: "Redução de medidas e gordura corporal com foco em reeducação alimentar e equilíbrio.",
        image: "/images/fotos-antes-depois-nutricao-.jpg",
        tag: "Paciente 1",
    },
    {
        title: "Performance Esportiva",
        description: "Melhora na composição corporal e rendimento nos treinos com plano estratégico.",
        image: "/images/fotos-antes-depois-nutricao-.jpg",
        tag: "Paciente 2",
    },
    {
        title: "Saúde Integrativa",
        description: "Transformação da relação com a comida e ganho de qualidade de vida.",
        image: "/images/fotos-antes-depois-nutricao-.jpg",
        tag: "Paciente 3",
    },
    {
        title: "Definição Muscular",
        description: "Otimização da dieta para realçar a musculatura e reduzir gordura subcutânea.",
        image: "/images/fotos-antes-depois-nutricao-.jpg",
        tag: "Paciente 4",
    },
    {
        title: "Reeducação Alimentar",
        description: "Mudança definitiva de hábitos e conquista de um novo estilo de vida.",
        image: "/images/fotos-antes-depois-nutricao-.jpg",
        tag: "Paciente 5",
    },
    {
        title: "Aumento de Energia",
        description: "Melhora nos níveis de disposição diária através de nutrição personalizada.",
        image: "/images/fotos-antes-depois-nutricao-.jpg",
        tag: "Paciente 6",
    },
]

export function Results() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

    return (
        <section id="resultados" className="py-24 lg:py-32 bg-secondary/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
                    <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Resultados
                    </span>
                    <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Casos de <span className="italic text-primary">Sucesso</span>
                    </h2>
                    <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Mais do que números, são transformações reais de vida e saúde.
                    </p>
                </div>

                <div className="relative group">
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
                        <CarouselContent className="-ml-4 md:-ml-6 flex items-stretch">
                            {results.map((item, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex">
                                    <ResultCard item={item} index={index} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                            <CarouselPrevious className="static translate-y-0 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-all shadow-md" />
                            <CarouselNext className="static translate-y-0 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-all shadow-md" />
                        </div>
                    </Carousel>
                </div>

                <p className="mt-20 text-center text-sm text-muted-foreground italic">
                    * Resultados individuais que variam de acordo com o metabolismo e dedicação de cada paciente.
                </p>
            </div>
        </section>
    )
}

function ResultCard({
    item,
    index,
}: {
    item: (typeof results)[number]
    index: number
}) {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            className={`group flex flex-col w-full transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-md mb-6 bg-muted shrink-0">
                <Image
                    src={item.image}
                    alt="Antes e Depois de Nutrição"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Labels */}
                <div className="absolute top-3 left-3 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold backdrop-blur-sm">
                    Antes
                </div>
                <div className="absolute top-3 right-3 bg-primary/80 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold backdrop-blur-sm">
                    Depois
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-background/90 text-foreground hover:bg-background/90 backdrop-blur-md border-primary/20">
                        {item.tag}
                    </Badge>
                </div>
            </div>

            <div className="px-2 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-grow">{item.description}</p>
            </div>
        </div>
    )
}
