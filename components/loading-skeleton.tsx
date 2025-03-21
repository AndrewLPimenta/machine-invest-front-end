import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  count?: number
  circle?: boolean
}

export function Skeleton({ className, count = 1, circle = false }: SkeletonProps) {
  const skeletons = Array.from({ length: count }).map((_, i) => (
    <div key={i} className={cn("animate-pulse bg-muted rounded", circle ? "rounded-full" : "rounded", className)} />
  ))

  return <>{skeletons}</>
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 animate-pulse">
      <div className="space-y-4">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}

export function ChartSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 animate-pulse">
      <div className="space-y-4">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/2" />
        <div className="h-[200px] w-full bg-muted rounded mt-6" />
      </div>
    </div>
  )
}

