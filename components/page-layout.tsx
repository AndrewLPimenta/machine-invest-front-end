import type { ReactNode } from "react"
import { EnhancedHeader } from "@/components/enhanced-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollToTop } from "@/components/scroll-to-top"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <EnhancedHeader />
      <main className="flex-1">{children}</main>
      <EnhancedFooter />
      <ScrollToTop />
    </div>
  )
}

