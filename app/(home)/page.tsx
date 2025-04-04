import type {Metadata} from 'next'
import {unstable_ViewTransition as ViewTransition} from 'react'
import {HeroSection} from "@/components/section/hero-section";
import {AboutEngSection} from "@/components/section/about-eng-section";

export const metadata: Metadata = {
    title: 'Krisna Wijaya',
    description: 'An overview of my career, writing and example projects',
}

export default async function Home() {
    return (
        <ViewTransition>

            <HeroSection />

            <AboutEngSection />

            <div className="mt-20 pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
                <div className="pb-20 sm:pb-24 xl:pb-0">
                    <div className="max-w-5xl mx-auto">
                        <div className="max-w-xl">
                            <h4 className="text-4xl font-bold">
                                Haup Car - Charter Services
                            </h4>
                            <p className="mt-5 text-lg font-light">
                                Implemented Figma designs into a functional web application using React and Ant Design, ensuring seamless UI and API integration for Haup Car.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <a href="/haup">
                            <img className="object-cover h-96 w-full rounded-lg shadow-lg"
                                 src="/images/template1.png" alt="Haup Car"/>
                        </a>
                    </div>
                </div>
            </div>


        </ViewTransition>
    )
}
