import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Machine Invest | Banco Digital",
  description:
    "Plataforma de simulação de investimentos e empréstimos com foco em criptomoedas e produtos financeiros.",
  keywords: "investimentos, criptomoedas, empréstimos, simulação financeira, fintech",
  authors: [{ name: "Machine Invest" }],
  creator: "Machine Invest",
  publisher: "Machine Invest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://machineinvest.com.br",
    title: "Machine Invest | Simulação de Investimentos e Empréstimos",
    description:
      "Plataforma de simulação de investimentos e empréstimos com foco em criptomoedas e produtos financeiros.",
    siteName: "Machine Invest",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Invest | Simulação de Investimentos e Empréstimos",
    description:
      "Plataforma de simulação de investimentos e empréstimos com foco em criptomoedas e produtos financeiros.",
    creator: "@machineinvest",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'