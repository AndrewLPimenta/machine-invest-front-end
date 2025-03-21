"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function SimulationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [investmentPeriod, setInvestmentPeriod] = useState(12)

  // Simplified calculation for demo purposes
  const calculateReturn = (amount: number, period: number, rate: number) => {
    return (amount * Math.pow(1 + rate / 100, period / 12)).toFixed(2)
  }

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
            Simule seus <span className="text-primary">investimentos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Calcule o potencial de rendimento dos seus investimentos com nossa ferramenta de simulação.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Simulador de Investimentos</CardTitle>
              <CardDescription>
                Ajuste os valores e veja o potencial de rendimento em diferentes modalidades.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Valor Inicial</span>
                  <span className="text-sm font-medium">R$ {investmentAmount.toLocaleString("pt-BR")}</span>
                </div>
                <Slider
                  value={[investmentAmount]}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(value) => setInvestmentAmount(value[0])}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Período (meses)</span>
                  <span className="text-sm font-medium">{investmentPeriod} meses</span>
                </div>
                <Slider
                  value={[investmentPeriod]}
                  min={1}
                  max={60}
                  step={1}
                  onValueChange={(value) => setInvestmentPeriod(value[0])}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
              <Tabs defaultValue="cdb" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cdb">CDB</TabsTrigger>
                  <TabsTrigger value="tesouro">Tesouro Direto</TabsTrigger>
                  <TabsTrigger value="cripto">Criptomoedas</TabsTrigger>
                </TabsList>
                <TabsContent value="cdb" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-muted-foreground">Rendimento</div>
                      <div className="mt-1 text-2xl font-bold">
                        R$ {calculateReturn(investmentAmount, investmentPeriod, 8.5)}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">Taxa: 8.5% a.a.</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-muted-foreground">Rentabilidade</div>
                      <div className="mt-1 text-2xl font-bold">
                        {(
                          (Number.parseFloat(calculateReturn(investmentAmount, investmentPeriod, 8.5)) /
                            investmentAmount -
                            1) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">No período</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="tesouro" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-muted-foreground">Rendimento</div>
                      <div className="mt-1 text-2xl font-bold">
                        R$ {calculateReturn(investmentAmount, investmentPeriod, 10.2)}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">Taxa: 10.2% a.a.</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-muted-foreground">Rentabilidade</div>
                      <div className="mt-1 text-2xl font-bold">
                        {(
                          (Number.parseFloat(calculateReturn(investmentAmount, investmentPeriod, 10.2)) /
                            investmentAmount -
                            1) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">No período</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="cripto" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-muted-foreground">Rendimento</div>
                      <div className="mt-1 text-2xl font-bold">
                        R$ {calculateReturn(investmentAmount, investmentPeriod, 25)}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">Taxa: 25% a.a. (estimativa)</div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium text-muted-foreground">Rentabilidade</div>
                      <div className="mt-1 text-2xl font-bold">
                        {(
                          (Number.parseFloat(calculateReturn(investmentAmount, investmentPeriod, 25)) /
                            investmentAmount -
                            1) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">No período</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Criptomoedas possuem alta volatilidade. Rendimentos passados não garantem rendimentos futuros.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/simulacao">
                  Simulação Completa <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

