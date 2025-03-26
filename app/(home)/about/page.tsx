import {BlurFade} from "@/components/ui/blur-fade";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {specializedAreas} from "./data";


export default function About() {
    return (
        <div className="space-y-10">

            <section>

                <div className="flex">

                    <div className="mr-6 shrink-0">
                        <Image
                            alt=""
                            src="/images/profiles.jpg"
                            width={200}
                            height={200}
                            className="inline-block size-36 rounded-full"
                        />
                    </div>

                    <div>
                        <BlurFade delay={0.25} inView>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Hello... 👋
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.25 * 2} inView>
                            <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                                I&#39;m Krisna Wijaya, Fullstack developer.
                            </span>
                        </BlurFade>
                        <BlurFade delay={0.25 * 2} inView>
                            <span className="text-xl text-pretty tracking-tighter sm:text-2xl">
                                Nice to meet you
                            </span>
                        </BlurFade>
                    </div>


                </div>


                <div className="mt-10">
                    <h5 className="text-4xl font-extrabold ">
                        A design that connects AI technology and user experience
                    </h5>
                    <p className="mt-5 text-lg ">
                        My interests span a broad spectrum of subjects, encompassing web development, AI, and technology in general.
                    </p>
                </div>

                <div className="mt-10 flex flex-col-reverse md:flex-row gap-3">
                    <Button className="w-1/2" size="lg" variant="secondary">Inquire</Button>
                    <Button className="w-1/2" size="lg">Make an appointment</Button>
                </div>

            </section>

            <section>
                <div>
                    <h5 className="text-2xl font-bold mb-5">Work experience</h5>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="text-black/50 text-sm mb-1 dark:text-white/70">2024 - Present</div>
                        <h3 className="text-base font-medium mb-3">AI-UX Designer &amp; Engineer at</h3>
                    </div>
                    <div>
                        <div className="text-black/50 text-sm mb-1 dark:text-white/70">2024 - Present</div>
                        <h3 className="text-base font-medium mb-3">AI-UX Designer &amp; Engineer at</h3>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col gap-2 mb-5 px-1">
                    <h5 className="text-2xl font-bold mb-5">Specialized Area</h5>
                    <p className="text-base text-gray-600">
                        I am good at designing new user experiences based on AI technology and developing MVPs that verify their hypothethes as quickly as possible.
                    </p>
                </div>
                <div className="space-y-4">
                    
                    {specializedAreas.map((area) => (
                        <div key={area.title} className="rounded-3xl border text-card-foreground shadow-sm overflow-hidden bg-[#F6F5F4] dark:bg-[#2C2C2C]">
                            <div className="p-8 px-5 py-4">
                                <h3 className="font-bold">
                                    {area.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-white">
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>

            <section>
                <div className="flex flex-col gap-2 mb-5 px-1">
                    <h5 className="text-2xl font-bold mb-5">Project</h5>
                    <p className="text-base text-gray-600">
                        We will introduce some of the participating projects
                    </p>
                </div>

            </section>


        </div>
    )
}