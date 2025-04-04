import Image from "next/image";
// import {Roboto_Mono} from 'next/font/google'
//
// const roboto_mono = Roboto_Mono({
//     subsets: ['latin'],
//     variable: '--font-roboto-mono',
//     display: 'swap',
// })

export default function Footer() {
    return (
        <footer className="sticky bottom-0 pt-4 pb-6 border-t border-gray-300 bg-white dark:bg-[#242424] opacity-30">
            <div className="max-w-5xl m-auto py-3">
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