"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const images = [
    { src: "/images/office-1.jpg", alt: "Consultório Alissia Rachel - Mesa de Atendimento" },
    { src: "/images/office-2.jpg", alt: "Consultório Alissia Rachel - Espaço de Avaliação" },
]

export function Gallery() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

    return (
        <section id="galeria" className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
                    <span className={`inline-block text-sm font-semibold tracking-widest uppercase text-primary transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        O Consultório
                    </span>
                    <h2 className={`mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Um espaço <span className="italic text-primary">acolhedor</span> para você
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 aspect-video md:aspect-[21/9]">
                    {images.map((image, index) => (
                        <GalleryImage key={index} image={image} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function GalleryImage({
    image,
    index,
}: {
    image: (typeof images)[number]
    index: number
}) {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden rounded-2xl group transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    )
}
