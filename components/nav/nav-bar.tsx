'use client'

import {HomeIcon, MoonIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '#front-end' },
    { name: 'About', href: '#experience-section' },
]
export default function NavBar() {
    const pathname = usePathname()
    const isActiveLink = /^\/.+$/.test(pathname);
    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full flex justify-center">
            <nav aria-label="Global" className="flex items-center justify-between py-2.5 px-4 max-w-3xl w-full backdrop-blur-sm bg-white/70 border border-gray-200/50 rounded-full mt-6 shadow-sm">

                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Home</span>
                        <HomeIcon className="size-6 text-gray-700" />
                    </Link>
                </div>

                <div className="lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href}
                           className={
                            cn("text-sm/6 font-semibold text-gray-800 hover:text-gray-900 ",
                            isActiveLink ? "bg-gray-100 rounded-full px-3 py-0.5": null)
                           }>
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button size="icon" variant="ghost">
                        <MoonIcon aria-hidden="true" className="size-6 text-gray-700" />
                    </Button>
                </div>

            </nav>
        </header>
    )
}
