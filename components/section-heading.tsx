export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center font-medium text-muted-foreground">
      {children}
    </div>
  )
}