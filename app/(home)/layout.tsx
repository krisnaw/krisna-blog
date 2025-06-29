import Footer from "@/components/footer";
import NavBar from "@/components/nav/nav-bar";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div>
            <NavBar />
                <div className="px-4 sm:px-6 lg:px-8 mt-24">
                    {children}
                </div>
            <Footer />
        </div>

    )
}
