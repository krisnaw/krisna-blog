import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/section/footer";

export default async function HomeLayout(
  {children}: { children: React.ReactNode }
) {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className="flex-grow">
        <main className="mt-18 border-l border-r border-gray-300 mx-auto max-w-5xl min-h-[95vh] py-20 px-10">
          {children}
        </main>
      </div>
      <Footer/>
    </div>

  )
}
