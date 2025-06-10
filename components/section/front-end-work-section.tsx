const navigation = [
    {
        id: 1,
        title: 'Crafting booking interface for long term rental at HaupCar',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },

    {
        id: 2,
        title: 'Redesigning B2B Signup',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },

    {
        id: 3,
        title: 'Redesigning B2B Signup',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
]

export default function FrontEndWorkSection() {
    return (
        <section id="front-end">
            <div className="py-24 sm:py-32">
                <h2 className="text-lg/8 font-semibold text-gray-900">Front-end Works</h2>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="mx-auto mt-10 space-y-14">
                        {navigation.map((item) => (
                            <div key={item.id}>
                                <div className="shadow-md hover:shadow-lg rounded-lg p-4">
                                    <img src="https://www.juliacodes.com/static/media/thumb.ef7100373a5d879446db.png" alt=""/>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg/7 font-semibold ">{item.title}</h3>
                                    <p className="text-sm/6 font-semibold text-gray-600">
                                        {item.descriptions}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}