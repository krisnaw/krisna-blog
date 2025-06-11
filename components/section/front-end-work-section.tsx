import Image from "next/image";

const navigation = [
    {
        id: 1,
        title: 'Crafting booking interface for long term rental at HaupCar',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        href: '/haup',
        image_url: '/haup/haup_home_page.webp'
    },

    // {
    //     id: 2,
    //     title: 'Redesigning B2B Signup',
    //     descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    //     href: ''
    // },
    //
    // {
    //     id: 3,
    //     title: 'Redesigning B2B Signup',
    //     descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    //     href: ''
    // },
]

export default function FrontEndWorkSection() {
    return (
        <section id="front-end">
            <div className="py-24 sm:py-32">
                <h2 className="text-lg/8 font-semibold text-gray-900">Front-end Works</h2>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="mx-auto mt-10 space-y-14">
                        {navigation.map((item) => (
                            <a key={item.id} href={item.href} className="group block relative">
                                <div className="absolute inset-0"></div>

                                <div className="shadow-md group-hover:shadow-lg rounded-lg">
                                    <Image src={item.image_url} className="border border-gray-200 rounded-lg"
                                           alt="Work sample" width={1000} height={300} />
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg/7 font-semibold ">{item.title}</h3>
                                    <p className="text-sm/6 font-semibold text-gray-600">
                                        {item.descriptions}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}