export default function SectionHeader({title, children} : {title: string, children: React.ReactNode}) {
  return (
    <div>
      <div>
        <div>
          <h1 className="uppercase text-4xl sm:text-7xl tracking-tighter text-balance">Animation Exploration.</h1>
          <div className="mt-2.5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}