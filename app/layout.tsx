import type { Metadata, Viewport } from 'next'
import { Lato, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-lato" 
});
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant" 
});

export const metadata: Metadata = {
  title: 'Alissia Rachel | Nutricionista',
  description: 'Nutricionista em Belo Horizonte - MG. Atendimento presencial e online. Nutrição funcional e comportamental para transformar sua relação com a alimentação de forma leve e personalizada.',
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7a2638',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <body className={`${lato.variable} ${cormorant.variable} font-sans antialiased overflow-x-hidden relative w-full`}>
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
