import NavBar from "@/components/nav/nav-bar";

export default async function HomeLayout(
  {children}: { children: React.ReactNode }
) {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className="flex-grow px-4 sm:px-6 lg:px-8 mt-24">
        {children}
      </div>
    </div>

  )
}
