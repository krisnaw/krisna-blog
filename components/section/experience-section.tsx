const navigation = [
    {
        id: 1,
        year: 'January 2025 - March 2025',
        title: 'FrontEnd Developer',
        company: 'HaupCar',
        descriptions: 'Contributing to the front-end development of Haup Car’s long-term booking system, a feature enabling customers to\n' +
            'rent vehicles for extended durations.',
        type: 'Contract'
    },

    {
        id: 2,
        year: 'May 2016 - March 2024',
        title: 'Full-stack Developer',
        company: 'C2 Media',
        descriptions: 'Developed ContentGrow, a web application that connects freelance talent with global content teams and streamlines\n' +
            'editorial workflows.',
        type: 'Full time'
    },

    {
        id: 3,
        year: 'July 2014 - May 2016',
        title: 'Tech Writer',
        company: 'Tech in Asia',
        descriptions: 'Researched and interviewed tech startup founders in Indonesia to write feature stories for Tech in Asia',
        type: 'Full time'
    },
]

export default function ExperienceSection() {
    return (
        <section id="experience-section">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg/8 font-semibold ">Experiences</h2>
                    <div className="mx-auto mt-10 ">
                        <div className="grid grid-cols-1 divide-indigo-100 dark:divide-gray-800 divide-y gap-10">
                            {navigation.map((item) => (
                                <div className="flex gap-10 pb-6" key={item.id}>

                                    <div className="flex-shrink-0 w-64">
                                        <div className="text-gray-500 font-bold">
                                            {item.year}
                                        </div>
                                        <div className="text-gray-600 font-light">
                                            {item.type}
                                        </div>
                                    </div>
                                    
                                    <div className="w-full">
                                        <h3 className="font-medium">{item.title} at {item.company}</h3>
                                        <p className="text-gray-500 mt-2">
                                            {item.descriptions}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}