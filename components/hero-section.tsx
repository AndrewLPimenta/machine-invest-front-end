"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownToLine, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden py-20 md:py-32" background="gradient">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05]" />

      <ResponsiveContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolucione seus investimentos
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Invista com <span className="text-primary">inteligência</span>, simule com precisão
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Descubra o potencial dos seus investimentos com a Machine Invest. Simulações precisas, criptomoedas e
                produtos financeiros em um só lugar.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="#download" id="download">
                  Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/simulacao">
                  Simular Agora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1 shadow-2xl sm:h-[600px] sm:w-[350px]">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
              <Image
                src="/placeholder.svg?height=600&width=350"
                alt="Machine Invest App"
                width={350}
                height={600}
                className="relative h-full w-full rounded-lg object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/60 p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-white">Machine Invest App</p>
                <p className="text-xs text-white/70">Disponível para iOS e Android</p>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}

