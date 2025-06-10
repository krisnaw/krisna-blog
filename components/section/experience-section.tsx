const navigation = [
    {
        id: 1,
        year: 'January 2025 - March 2025',
        title: 'FrontEnd Developer',
        company: 'HaupCar',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        type: 'Contract'
    },

    {
        id: 2,
        year: '2025 - 2025',
        title: 'FrontEnd Developer',
        company: 'HaupCar',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        type: 'Full time'
    },

    {
        id: 3,
        year: 'January 2025 - March 2025',
        title: 'FrontEnd Developer',
        company: 'HaupCar',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        type: 'Full time'
    },
]

export default function ExperienceSection() {
    return (
        <section id="experience-section">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg/8 font-semibold text-gray-900">Experiences</h2>
                    <div className="mx-auto mt-10 ">
                        <div className="grid grid-cols-1 divide-indigo-50 divide-y gap-10">
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
                                        <h3 className="font-medium">FrontEnd Developer at HaupCar</h3>
                                        <p className="text-gray-500 mt-2">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
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