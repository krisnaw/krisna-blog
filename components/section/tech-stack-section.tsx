import Image from "next/image";

const tools = [
    {
        id: 1,
        name: 'TriggerDev',
        image_url: '/TriggerDev/trigger-dev-icon-light.svg'
    },

    {
        id: 2,
        name: 'Drizzle',
        image_url: '/Drizzle/logo-github-sq-light.svg'
    },

    {
        id: 3,
        name: 'NEXTJS',
        image_url: '/NEXTJS/logotype/light-background/nextjs-logotype-light-background.svg'
    },

    {
        id: 4,
        name: 'Vercel',
        image_url: '/Vercel/logotype/light/vercel-logotype-light.svg'
    },

    {
        id: 5,
        name: 'Supabase',
        image_url: '/Supabase/supabase-logo-wordmark--light.svg'
    },

    {
        id: 6,
        name: 'ReactRouter',
        image_url: '/reactrouter/rr_lockup_light.svg'

    },
    //
    // {
    //     id: 7,
    //     name: 'NodeJS',
    //     image_url: '/nodejs/nodejsDark.svg'
    // },
    //
    // {
    //     id: 8,
    //     name: 'Laravel',
    //     image_url: '/Laravel/laravel-logo.svg'
    // },
    //
    // {
    //     id: 9,
    //     name: 'NodeJS',
    //     image_url: '/nodejs/nodejsDark.svg'
    // },
]

export default function TechStackSection() {
    return (
        <section id="tech-stack-section">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg/8 font-semibold text-gray-900">Tech Stack</h2>

                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-3">

                        {tools.map((tool) => (
                            <Image key={tool.id} src={tool.image_url} alt={tool.name}     width={158}
                                   height={48} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}