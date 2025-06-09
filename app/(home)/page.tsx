const navigation = [
    {
        id: 1
    },

    {
        id: 2
    },

    {
        id: 3
    },
]
export default async function Page() {
    return (
        <div>
            <div className="py-24 sm:py-32">
                <h2 className="text-lg/8 font-semibold text-gray-900">About</h2>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    Lorem
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <h2 className="text-lg/8 font-semibold text-gray-900">Case Studies</h2>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="mx-auto mt-10">
                        <div>
                            <img src="https://www.juliacodes.com/static/media/thumb.ef7100373a5d879446db.png" alt=""/>
                        </div>

                        <div>
                            <img src="https://www.juliacodes.com/static/media/thumb.ef7100373a5d879446db.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg/8 font-semibold text-gray-900">Experiences</h2>
                    <div className="mx-auto mt-10 ">
                        <div className="flex flex-col gap-10">
                            {navigation.map((item) => (
                                <div className="flex gap-10" key={item.id}>
                                    <div className="flex-shrink-0">
                                        January 2025 - March 2025
                                    </div>
                                    <div className="w-full">
                                        <h3>FrontEnd Developer at HaupCar</h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                        </p>
                                    </div>
                                </div>
                            ))}



                        </div>
                    </div>
                </div>

            </div>

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
                            src="https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="Tuple"
                            src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="SavvyCal"
                            src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                        <img
                            alt="Statamic"
                            src="https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
