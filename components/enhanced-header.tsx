"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ResponsiveContainer } from "@/components/responsive-container"

export function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/80",
      )}
    >
      <ResponsiveContainer>
        <div className="flex h-16 items-center justify-between">
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
            <div className="hidden md:block">
              <MainNav />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="hidden sm:block">
              <Button asChild>
                <Link href="#download">
                  Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                  <div className="mt-6 flex flex-col gap-6">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="/assets/m-logo-machine.png"
                        alt="Machine Invest Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <span className="font-bold">Machine Invest</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      <Link
                        href="/"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/criptomoedas"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Criptomoedas
                      </Link>
                      <Link
                        href="/simulacao"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Simulação
                      </Link>
                      <Link
                        href="/servicos"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Serviços
                      </Link>
                      <Link
                        href="/blog"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/sobre"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sobre
                      </Link>
                      <Link
                        href="/contato"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contato
                      </Link>
                      <Link
                        href="/faq"
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        FAQ
                      </Link>
                    </nav>
                    <div className="mt-4">
                      <Button className="w-full" asChild>
                        <Link href="#download" onClick={() => setIsMobileMenuOpen(false)}>
                          Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  )
}

