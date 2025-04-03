import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div>
            <Header />
            <main className="p-6 pt-3 md:pt-6 min-h-screen flex flex-col">
                {children}
            </main>
            <Footer />
        </div>

    )
}