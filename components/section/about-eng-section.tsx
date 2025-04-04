import {Funnel_Display} from "next/font/google";

const funnel = Funnel_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
})
export function AboutEngSection() {
    return (
        <section className="rounded-lg py-32 bg-gray-100 dark:bg-[#242424]">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">

                    <div className="flex items-center pr-4">
                        <h2 className={`text-6xl font-bold ${funnel.className}`}>
                            What&#39;s a Product Engineering?
                        </h2>
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
        </section>
    )
}