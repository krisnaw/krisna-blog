import {Logo} from "@/components/logo";
import Link from "next/link";
import {ThemeToggle} from "@/components/theme-toggle";

export default function Header() {
    return (
        <header className="mb-5 md:mb-10">
            <nav className="mx-auto flex items-center justify-between">
                <div className="flex items-center w-full">
                    <Logo/>
                </div>
                <div className="flex items-center gap-x-4">
                    <div>
                        <Link href="/about"
                              className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]">
                            About
                        </Link>
                    </div>
                    <div>
                        <ThemeToggle/>
                    </div>
                </div>
            </nav>
        </header>
    )
}