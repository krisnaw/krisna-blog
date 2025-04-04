import Image from "next/image";
import {Roboto_Mono} from 'next/font/google'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})

export default function Footer() {
    return (
        <footer className={`border-t border-gray-200 dark:border-gray-700 py-6 ${roboto_mono.className}`}>
            <div className="px-6">
                <div className="flex justify-between">
                    <div className={` text-lg`}>
                        Design and build by Krisna Wijaya
                    </div>

                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Source →
                    </a>
                </div>
            </div>
        </footer>
    )
}