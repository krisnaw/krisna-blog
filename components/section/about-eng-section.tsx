import {Funnel_Display} from "next/font/google";

const funnel = Funnel_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
})

export default function AboutEngSection() {
    return (
        <div className="overflow-hidden bg-gray-50  py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="flex items-center pr-4">
                            <h2 className={`text-6xl font-bold ${funnel.className}`}>
                                What&#39;s a Product Engineering?
                            </h2>
                        </div>

                    </div>
                    <div className="space-y-6 pl-4">
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
            </div>
        </div>
    )
}
