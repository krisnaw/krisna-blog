import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/section/footer";

export default async function HomeLayout(
  {children}: { children: React.ReactNode }
) {

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f1]">
      <NavBar/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>

  )
}
