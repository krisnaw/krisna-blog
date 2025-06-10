import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div>
            <NavBar />
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-10">
                {children}
            </div>
            <Footer />
        </div>

    )
}