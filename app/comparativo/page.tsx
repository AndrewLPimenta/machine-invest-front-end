"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowRight, Check, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ComparisonChart } from "@/components/comparison-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ComparativoPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const feeComparisonData = [
    { label: "Taxa de Manutenção", machineInvest: 0, traditional: 30, color: "#10b981" },
    { label: "Taxa de Transferência", machineInvest: 0, traditional: 15, color: "#10b981" },
    { label: "Taxa de Administração", machineInvest: 0.5, traditional: 2, color: "#10b981" },
    { label: "Taxa de Custódia", machineInvest: 0, traditional: 0.3, color: "#10b981" },
  ]

  const returnComparisonData = [
    { label: "Renda Fixa", machineInvest: 12, traditional: 9, color: "#06b6d4" },
    { label: "Renda Variável", machineInvest: 18, traditional: 14, color: "#06b6d4" },
    { label: "Criptomoedas", machineInvest: 25, traditional: 0, color: "#06b6d4" },
  ]

  const comparisonFeatures = [
    {
      category: "Conta Digital",
      features: [
        { name: "Conta sem taxas de manutenção", machineInvest: true, traditional: false },
        { name: "Transferências gratuitas e ilimitadas", machineInvest: true, traditional: false },
        { name: "Cartão de débito e crédito sem anuidade", machineInvest: true, traditional: false },
        { name: "Rendimento automático do saldo", machineInvest: true, traditional: true },
        { name: "Atendimento 24h via chat", machineInvest: true, traditional: false },
      ],
    },
    {
      category: "Investimentos",
      features: [
        { name: "Renda Fixa", machineInvest: true, traditional: true },
        { name: "Renda Variável", machineInvest: true, traditional: true },
        { name: "Criptomoedas", machineInvest: true, traditional: false },
        { name: "Simulador de investimentos", machineInvest: true, traditional: false },
        { name: "Recomendações personalizadas", machineInvest: true, traditional: false },
        { name: "Taxa de administração reduzida", machineInvest: true, traditional: false },
      ],
    },
    {
      category: "Serviços",
      features: [
        { name: "Empréstimos com taxas reduzidas", machineInvest: true, traditional: false },
        { name: "Financiamento imobiliário", machineInvest: true, traditional: true },
        { name: "Seguros", machineInvest: true, traditional: true },
        { name: "Previdência privada", machineInvest: true, traditional: true },
        { name: "Educação financeira gratuita", machineInvest: true, traditional: false },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/m-logo-machine.png"
                alt="Machine Invest Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="hidden font-bold sm:inline-block">Machine Invest</span>
            </Link>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild>
              <Link href="/#download">
                Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Machine Invest vs <span className="text-muted-foreground">Bancos Tradicionais</span>
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Compare e descubra por que a Machine Invest é a escolha inteligente para seus investimentos e serviços
                financeiros.
              </p>
            </motion.div>
            <motion.div
              className="mt-16 grid gap-8 lg:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={ref}
            >
              <div>
                <ComparisonChart
                  title="Comparativo de Taxas"
                  description="Taxas cobradas pela Machine Invest vs Bancos Tradicionais (valores em %)"
                  data={feeComparisonData}
                />
              </div>
              <div>
                <ComparisonChart
                  title="Comparativo de Rendimentos"
                  description="Rendimento médio anual por tipo de investimento (valores em % a.a.)"
                  data={returnComparisonData}
                />
              </div>
            </motion.div>
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Comparativo Detalhado</CardTitle>
                  <CardDescription>
                    Veja as principais diferenças entre a Machine Invest e os bancos tradicionais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {comparisonFeatures.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[50%]">Recurso</TableHead>
                              <TableHead className="text-center">Machine Invest</TableHead>
                              <TableHead className="text-center">Bancos Tradicionais</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {category.features.map((feature, featureIndex) => (
                              <TableRow key={featureIndex}>
                                <TableCell>{feature.name}</TableCell>
                                <TableCell className="text-center">
                                  {feature.machineInvest ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 text-red-500 mx-auto" />
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  {feature.traditional ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 text-red-500 mx-auto" />
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="mt-16 grid gap-8 lg:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>Economia Real</CardTitle>
                  <CardDescription>Veja quanto você pode economizar ao migrar para a Machine Invest.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Taxa de manutenção de conta (anual)</span>
                      <span className="font-medium text-green-500">R$ 360,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Taxas de transferência (estimativa anual)</span>
                      <span className="font-medium text-green-500">R$ 180,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Economia em taxa de administração (para R$ 50.000)</span>
                      <span className="font-medium text-green-500">R$ 750,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Anuidade de cartão de crédito</span>
                      <span className="font-medium text-green-500">R$ 400,00</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="font-bold">Economia total anual</span>
                      <span className="font-bold text-green-500">R$ 1.690,00</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/simulacao">
                      Simular Sua Economia <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Depoimentos de Clientes</CardTitle>
                  <CardDescription>O que nossos clientes dizem sobre a mudança para a Machine Invest.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 border-l-4 border-primary pl-4">
                    <p className="italic">
                      "Depois de migrar para a Machine Invest, economizo mais de R$ 2.000 por ano em taxas e ainda tenho
                      rendimentos superiores nos meus investimentos."
                    </p>
                    <p className="text-sm text-muted-foreground">— Ricardo Almeida, ex-cliente de banco tradicional</p>
                  </div>
                  <div className="space-y-2 border-l-4 border-primary pl-4">
                    <p className="italic">
                      "A diferença na experiência do usuário é impressionante. Tudo é mais simples, rápido e
                      transparente na Machine Invest."
                    </p>
                    <p className="text-sm text-muted-foreground">— Mariana Santos, investidora há 2 anos</p>
                  </div>
                  <div className="space-y-2 border-l-4 border-primary pl-4">
                    <p className="italic">
                      "A possibilidade de investir em criptomoedas de forma segura e integrada com meus outros
                      investimentos foi o que me fez escolher a Machine Invest."
                    </p>
                    <p className="text-sm text-muted-foreground">— Paulo Mendes, entusiasta de tecnologia</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/depoimentos">
                      Ver Mais Depoimentos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link href="/#download">
                  Baixar App e Começar a Economizar <ArrowDownToLine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/assets/m-logo-machine.png"
                  alt="Machine Invest Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-bold">Machine Invest</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Plataforma de simulação de investimentos e empréstimos com foco em criptomoedas e produtos financeiros.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Produtos</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/criptomoedas" className="text-muted-foreground hover:text-foreground">
                    Criptomoedas
                  </Link>
                </li>
                <li>
                  <Link href="/simulacao" className="text-muted-foreground hover:text-foreground">
                    Simulação
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="text-muted-foreground hover:text-foreground">
                    Serviços Bancários
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Empresa</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/sobre" className="text-muted-foreground hover:text-foreground">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-muted-foreground hover:text-foreground">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/termos" className="text-muted-foreground hover:text-foreground">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-muted-foreground hover:text-foreground">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Machine Invest. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

