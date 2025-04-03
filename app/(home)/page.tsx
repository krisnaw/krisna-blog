import type {Metadata} from 'next'
import Image from 'next/image'
import {Funnel_Display} from 'next/font/google'
import {BlurFade} from "@/components/ui/blur-fade";

const funnel = Funnel_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Krisna Wijaya',
    description: 'An overview of my career, writing and example projects',
}

export default async function Home() {
    return (
        <div>

            <div className="max-w-3xl m-auto py-32 min-h-screen">

                <div className="flex items-center mt-10">

                    <div>
                        <Image
                            className="rounded-lg grayscale hover:grayscale-0"
                            src="/images/profiles.jpg" alt="Profile" width={180} height={180} />
                    </div>

                    <div className="ml-10 mx-auto">
                        <BlurFade delay={0.25 * 2} inView>
                            <h4 className={`text-5xl font-semibold mb-1.5 ${funnel.className}`}>
                                Full-Stack  <br/> Product Developer
                            </h4>
                            <p className={`text-sm italic ${funnel.className}`}>
                                Emphasizes end-to-end ownership of a product—from backend logic to frontend polish
                            </p>
                        </BlurFade>
                    </div>

                </div>

            </div>

            <section className="max-w-5xl px-6 mx-auto pb-32 bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className={`text-6xl font-bold ${funnel.className}`}>
                        What&#39;s a Product Engineering?
                    </div>
                    <div className="max-w-lg space-y-6">
                        <p className={`leading-relaxed text-2xl/6 ${funnel.className}`}>
                            As a Product Engineer, I blend the problem-solving mindset of a product builder with the technical expertise of a full-stack developer.
                        </p>

                        <p className={`leading-relaxed text-2xl/6 ${funnel.className}`}>
                            This enables me to transform ideas into fully functional products,
                            delivering end-to-end solutions—coding frontends, backends,
                            and everything in between—while prioritizing user needs, scalability, and fast, reliable launches.
                        </p>

                    </div>
                </div>

            </section>

            <div className="mt-20 px-8 rounded-lg py-16">
                <div className="px-6">
                    <div className="max-w-xl">
                        <h4 className="text-4xl font-bold">
                            Haup Car - Charter Services
                        </h4>
                        <p className="mt-5 text-lg font-light">
                            Implemented Figma designs into a functional web application using React and Ant Design, ensuring seamless UI and API integration for Haup Car.
                        </p>
                    </div>

                    <div className="mt-10">
                        <a href="/haup">
                            <img className="object-cover h-80 w-full rounded-lg shadow-lg"
                                 src="/images/template1.png" alt="Haup Car"/>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}
