"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Pacientes Atendidos" },
  { value: 2, suffix: " anos", label: "De Experiência" },
  { value: 98, suffix: "%", label: "Satisfação" },
  { value: 2, suffix: "", label: "Tipos de Atendimento" },
]

function AnimatedNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-primary">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-4xl font-serif font-bold text-primary-foreground md:text-5xl">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
