export default async function HomeLayout(
  {children}: { children: React.ReactNode }
) {

  return (
    <div className="bg-slate-100">
      {children}
    </div>

  )
}
