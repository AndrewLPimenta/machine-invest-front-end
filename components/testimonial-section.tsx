"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function TestimonialSection() {
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

  const testimonials = [
    {
      content:
        "A Machine Invest revolucionou minha forma de investir. As simulações são precisas e me ajudaram a tomar decisões mais inteligentes.",
      author: "Carlos Silva",
      role: "Investidor há 5 anos",
      avatar: "CS",
    },
    {
      content:
        "Nunca foi tão fácil acompanhar meus investimentos em criptomoedas. A interface é intuitiva e as análises são completas.",
      author: "Ana Oliveira",
      role: "Trader de criptomoedas",
      avatar: "AO",
    },
    {
      content:
        "O aplicativo da Machine Invest é simplesmente incrível. Consigo simular diferentes cenários e tomar decisões com mais segurança.",
      author: "Roberto Santos",
      role: "Empresário",
      avatar: "RS",
    },
  ]

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Descubra como a Machine Invest tem ajudado investidores a alcançar seus objetivos financeiros.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

