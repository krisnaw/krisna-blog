import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>

    )
}