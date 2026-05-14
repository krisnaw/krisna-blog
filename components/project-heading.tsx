import {cn} from "@/lib/utils";

export function ProjectHeading({ className, children }: { className? : string, children: React.ReactNode }) {
  return (
    <div className={cn("flex items-center font-medium text-zinc-600 dark:text-zinc-400", className)}>
      {children}
    </div>
  )
}