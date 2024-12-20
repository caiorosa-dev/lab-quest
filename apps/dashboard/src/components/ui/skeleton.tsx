import { cn } from "@/helpers/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-accent/50", className)}
      {...props}
    />
  )
}

export { Skeleton }
