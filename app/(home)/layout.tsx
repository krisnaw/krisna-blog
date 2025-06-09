import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            {children}
            <Footer />
        </div>

    )
}