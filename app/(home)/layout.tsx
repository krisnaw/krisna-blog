export default async function HomeLayout(
  {children}: { children: React.ReactNode }
) {

  return (
    <div className="bg-gray-100/50">
      {children}
    </div>

  )
}
