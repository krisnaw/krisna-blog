export default function TechStackSection() {
    return (
        <section id="tech-stack-section">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg/8 font-semibold text-gray-900">Tech Stack</h2>
                    <div
                        className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        <img
                            alt="Transistor"
                            src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="Reform"
                            src={"/Drizzle/logo-github-sq-light.svg"}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="NEXTJS"
                            src={"/NEXTJS/logotype/light-background/nextjs-logotype-light-background.svg"}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="Vercel"
                            src={"/Vercel/logotype/light/vercel-logotype-light.svg"}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="Supabase"
                            src={"/Supabase/Supabase-logo-icon.svg"}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}