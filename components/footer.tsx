import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Heart className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-semibold text-foreground">
              Alissia Rachel
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Sobre", "Servicos", "Depoimentos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            {"2026 Alissia Rachel. Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
