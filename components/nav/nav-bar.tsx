'use client'

import {HomeIcon} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '#front-end' },
    { name: 'About', href: '#experience-section' },
]
export default function NavBar() {
    const pathname = usePathname()
    const isActiveLink = /^\/.+$/.test(pathname);
    console.log(pathname)
    return (
        <header className="fixed inset-x-0 top-0 z-50 w-full flex justify-center">
            <nav aria-label="Global" className="flex items-center justify-between py-2.5 px-4 max-w-3xl w-full backdrop-blur-sm 
            bg-white/70 dark:bg-gray-900/70 border border-gray-200/50 dark:border-gray-800/50 rounded-full mt-6 shadow-sm">

                <div className="flex lg:flex-1">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Home</span>
                            <HomeIcon className="h-[1.2rem] w-[1.2rem]" />
                        </Link>
                    </Button>
                </div>

                <div className="lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                        <Button
                            key={item.name}
                            variant={
                                (item.name === 'Work' && pathname.startsWith('/')) ||
                                ((item.name === 'Home' || item.name === 'About') && !pathname.startsWith('/'))
                                    ? "secondary"
                                    : "ghost"
                            }
                            asChild
                            className="rounded-full"
                        >
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ModeToggle />
                </div>

            </nav>
        </header>
    )
}
