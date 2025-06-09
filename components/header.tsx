import Link from "next/link";

export default async function Header() {
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Company, Inc.";

    return (
        <header className="h-16 bg-white/50 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
            <div className="max-w-5xl m-auto py-3 flex">
                <Link href="/" className="flex items-center justify-center">
                    <div>Home</div>
                    <span className="sr-only">{companyName}</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/faq" className="text-sm font-medium hover:text-orange-600 transition-colors">
                        FAQ
                    </Link>
                    <Link href="/press" className="text-sm font-medium hover:text-orange-600 transition-colors">
                        Press
                    </Link>
                </nav>
            </div>
        </header>
    )
}