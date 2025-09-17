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
        id: 4,
        name: 'Vercel',
        image_dark: '/Vercel/logotype/dark/vercel-logotype-dark.svg',
        image_light: '/Vercel/logotype/light/vercel-logotype-light.svg',
    },
]

const frameworks = [
    {
        id: 1,
        name: 'NEXTJS',
        image_dark: '/NEXTJS/logotype/dark-background/nextjs-logotype-dark-background.svg',
        image_light: '/NEXTJS/logotype/light-background/nextjs-logotype-light-background.svg',
    },

    {
        id: 2,
        name: 'Laravel',
        image_dark: '/Laravel/laravel-logo.svg',
        image_light: '/Laravel/laravel-logo.svg',
    },

    {
        id: 3,
        name: 'ReactRouter',
        image_dark: '/reactrouter/rr_lockup_dark.svg',
        image_light: '/reactrouter/rr_lockup_light.svg',
    },

    {
        id: 4,
        name: 'NodeJS',
        image_dark: '/nodejs/nodejsLight.svg',
        image_light: '/nodejs/nodejsDark.svg',
    },
]

const databases = [
    {
        id: 5,
        name: 'Supabase',
        image_dark: '/Supabase/supabase-logo-wordmark--dark.svg',
        image_light: '/Supabase/supabase-logo-wordmark--light.svg',
    },

    {
        id: 2,
        name: 'Drizzle',
        image_dark: '/Drizzle/logo-github-sq-dark.svg',
        image_light: '/Drizzle/logo-github-sq-light.svg',
    },

]


export default function TechStackSection() {
    const theme = useTheme();
    return (
        <section id="tech-stack-section">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-xl/8 font-semibold ">Tech Stack</h2>

                    <div className="mt-10">
                        <h4 className="text-sm font-medium text-neutral-500">Framework</h4>
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mt-4">
                            <div
                                className="mx-auto grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-3">
                                {frameworks.map((tool) => (
                                    <Image key={tool.id}
                                           src={theme.theme == 'dark' ? tool.image_dark : tool.image_light}
                                           alt={tool.name} width={158}
                                           height={48}/>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="mt-10">
                        <h4 className="text-sm font-medium text-neutral-500">Database and ORM</h4>
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mt-4">
                            <div
                                className="mx-auto grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-3">
                                {databases.map((tool) => (
                                    <Image key={tool.id}
                                           src={theme.theme == 'dark' ? tool.image_dark : tool.image_light}
                                           alt={tool.name} width={158}
                                           height={48}/>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h4 className="text-sm font-medium text-neutral-500">Infra and tools</h4>
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mt-4">
                            <div
                                className="mx-auto grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-3">
                                {tools.map((tool) => (
                                    <Image key={tool.id}
                                           src={theme.theme == 'dark' ? tool.image_dark : tool.image_light}
                                           alt={tool.name} width={158}
                                           height={48}/>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
