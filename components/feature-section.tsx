"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, LineChart, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FeatureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Simulações Precisas",
      description: "Calcule rendimentos e compare diferentes opções de investimento com precisão.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Criptomoedas",
      description: "Acesse as principais criptomoedas do mercado e acompanhe em tempo real.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Segurança Garantida",
      description: "Seus dados e investimentos protegidos com a mais alta tecnologia de segurança.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Análises Avançadas",
      description: "Gráficos e análises detalhadas para tomar as melhores decisões financeiras.",
    },
  ]

  return (
    <section className="py-20" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Por que escolher a <span className="text-primary">Machine Invest</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Descubra os diferenciais que fazem da Machine Invest a plataforma ideal para seus investimentos.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

