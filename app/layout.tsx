import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden relative w-full`}>
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
