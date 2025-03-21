import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { ResponsiveContainer } from "@/components/responsive-container"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  background?: "default" | "muted" | "primary" | "gradient"
  id?: string
  fullWidth?: boolean
}

export function Section({
  children,
  className,
  containerClassName,
  background = "default",
  id,
  fullWidth = false,
}: SectionProps) {
  const getBackgroundClass = () => {
    switch (background) {
      case "muted":
        return "bg-muted/30"
      case "primary":
        return "bg-primary/5"
      case "gradient":
        return "bg-gradient-to-b from-background via-muted/20 to-background"
      default:
        return ""
    }
  }

  return (
    <section id={id} className={cn("py-16 md:py-24", getBackgroundClass(), className)}>
      <ResponsiveContainer className={containerClassName} fullWidth={fullWidth}>
        {children}
      </ResponsiveContainer>
    </section>
  )
}

