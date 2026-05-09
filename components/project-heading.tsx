export function ProjectHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center font-medium text-gray-600">
      {children}
    </div>
  )
}