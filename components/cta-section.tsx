"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-primary/5" ref={ref}>
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative flex items-center justify-center lg:order-last"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1 shadow-2xl">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
              <Image
                src="/assets/banner-home-machine.jpg"
                alt="Machine Invest App"
                width={350}
                height={500}
                className="relative h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/60 p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-white">Machine Invest App</p>
                <p className="text-xs text-white/70">Disponível para iOS e Android</p>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Baixe agora o <span className="text-primary">aplicativo</span> e comece a investir
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Tenha acesso a todas as funcionalidades da Machine Invest diretamente no seu smartphone. Simule
                investimentos, acompanhe criptomoedas e gerencie seus produtos financeiros em qualquer lugar.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#download">
                  Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sobre">Saiba Mais</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="App Store"
                width={120}
                height={40}
                className="h-10 w-32"
              />
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Google Play"
                width={120}
                height={40}
                className="h-10 w-32"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

