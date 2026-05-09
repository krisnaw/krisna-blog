export function ProjectSubheading({ children }: { children: React.ReactNode }) {
  return (
    <p className="line-clamp-3 text-sm/6 text-gray-600">
      {children}
    </p>
  )
}