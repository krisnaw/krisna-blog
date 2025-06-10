import Image from "next/image";
import {BlurFade} from "@/components/ui/blur-fade";
import {Funnel_Display} from "next/font/google";

const funnel = Funnel_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
})

export default function HeroSection() {
    return (
        <section id="hero-section">
            <div className="py-24 sm:py-32">
                <div className="flex items-center mt-6">
                    <div>
                        <Image
                            className="rounded-lg grayscale hover:grayscale-0"
                            src="/images/profiles.jpg" alt="Profile" width={240} height={240} />
                    </div>

                    <div className="ml-10 mx-auto">
                        <BlurFade delay={0.25} inView>
                            <h5 className="text-xl font-light">
                                I&#39;m Krisna Wijaya
                            </h5>
                        </BlurFade>
                        <BlurFade delay={0.45 * 2} inView>
                            <h4 className={`text-3xl font-semibold mb-1.5 ${funnel.className}`}>
                                Full-Stack Product Developer
                            </h4>
                            <p className={`text-base italic leading-relaxed ${funnel.className}`}>
                                Emphasizes end-to-end ownership of a product—from backend logic to frontend polish
                            </p>
                        </BlurFade>
                    </div>

                </div>
            </div>
        </section>
    )
}
