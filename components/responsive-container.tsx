import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  id?: string
  fullWidth?: boolean
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  id,
  fullWidth = false,
}: ResponsiveContainerProps) {
  return (
    <Component id={id} className={cn(fullWidth ? "w-full" : "container", "px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  )
}

