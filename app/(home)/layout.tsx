import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div>
            <NavBar />
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
            <Footer />
        </div>

    )
}