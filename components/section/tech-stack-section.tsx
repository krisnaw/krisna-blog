'use client';
import Image from "next/image";
import {useTheme} from "next-themes";

const tools = [
    {
        id: 1,
        name: 'TriggerDev',
        image_dark: '/TriggerDev/trigger-dev-icon-dark.svg',
        image_light: '/TriggerDev/trigger-dev-icon-light.svg',
    },

    {
        id: 2,
        name: 'Drizzle',
        image_dark: '/Drizzle/logo-github-sq-dark.svg',
        image_light: '/Drizzle/logo-github-sq-light.svg',
    },

    {
        id: 3,
        name: 'NEXTJS',
        image_dark: '/NEXTJS/logotype/dark-background/nextjs-logotype-dark-background.svg',
        image_light: '/NEXTJS/logotype/light-background/nextjs-logotype-light-background.svg',
    },

    {
        id: 4,
        name: 'Vercel',
        image_dark: '/Vercel/logotype/dark/vercel-logotype-dark.svg',
        image_light: '/Vercel/logotype/light/vercel-logotype-light.svg',
    },

    {
        id: 5,
        name: 'Supabase',
        image_dark: '/Supabase/supabase-logo-wordmark--dark.svg',
        image_light: '/Supabase/supabase-logo-wordmark--light.svg',
    },

    {
        id: 6,
        name: 'ReactRouter',
        image_dark: '/reactrouter/rr_lockup_dark.svg',
        image_light: '/reactrouter/rr_lockup_light.svg',
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
    const theme = useTheme();
    console.log(theme.theme)
    return (
        <section id="tech-stack-section">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg/8 font-semibold ">Tech Stack</h2>

                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-3">

                        {tools.map((tool) => (
                            <Image key={tool.id} src={theme.theme == 'dark' ? tool.image_dark: tool.image_light} alt={tool.name}     width={158}
                                   height={48} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}