import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import Image from "next/image";

export default function Page() {
    // const [tableOfContents, setTableOfContents] = useState<TableOfContents[]>([]);
    //
    // useEffect(() => {
    //     const headings = document.querySelectorAll('.mx-auto.max-w-3xl h2, .mx-auto.max-w-3xl h3');
    //     const toc: TableOfContents[] = Array.from(headings).map((heading) => {
    //         const text = heading.textContent || '';
    //         const id = heading.id || text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    //         heading.id = id; // Ensure headings have an ID for linking
    //         return {
    //             id,
    //             text,
    //             level: heading.tagName.toLowerCase(),
    //         };
    //     });
    //     setTableOfContents(toc);
    // }, []);


    return (
        <div className="bg-white px-6 py-20 lg:px-8">

            {/*WIP Table of Content*/}
            {/*<div className="fixed right-0 top-1/2 -translate-y-1/2 z-10 text-gray-700 text-xs/7 font-semibold tracking-wide uppercase flex items-center">*/}

            {/*    <div className="group">*/}
            {/*        <div>*/}
            {/*            list*/}
            {/*        </div>*/}

            {/*        <nav*/}
            {/*            className="ml-4 border border-gray-200 p-4 rounded-md backdrop-blur-sm bg-white/70 max-w-xs absolute top-1/2">*/}
            {/*            <ul className="space-y-2">*/}
            {/*                {tableOfContents.map((item: TableOfContents) => (*/}
            {/*                    <li key={item.id} className={item.level === 'h3' ? 'ml-4' : ''}>*/}
            {/*                        <a href={`#${item.id}`} className="text-gray-600 hover:text-gray-900">*/}
            {/*                            {item.text}*/}
            {/*                        </a>*/}
            {/*                    </li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*    </div>*/}

            {/*</div>*/}

            {/*Page Title*/}
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-xs/7 font-semibold text-gray-600">Recent works</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Developing Booking Interface for Long Term Car Rentals
                </h1>
            </div>

            <div className="mx-auto max-w-3xl mt-10 bg-gray-50 rounded-md p-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10">
                    <div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">Timeline</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <div className="text-gray-800 font-medium text-lg">
                                    January - March 2025
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">My Roles</p>
                        <ul className="mt-2">
                            <li>
                                <div className="text-gray-800 font-medium text-lg">
                                    FrontEnd Developer
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">Tech Stack</p>
                        <ul className="mt-2">

                            <li>
                                <div className="text-gray-800 font-medium text-lg">
                                    AntDesign
                                </div>
                            </li>

                            <li>
                                <div className="text-gray-800 font-medium text-lg">
                                    NextJS
                                </div>
                            </li>

                            <li>
                                <div className="text-gray-800 font-medium text-lg">
                                    TailwindCSS
                                </div>
                            </li>

                            <li>
                                <div className="text-gray-800 font-medium text-lg">
                                    Zustand
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">

                <p className="mt-6 text-xl/8">
                    HaupCar is Thailand based Car Rental company and they planed to revamp the UI of their Long Term car rental feature.


                    {/*Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget*/}
                    {/*aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend*/}
                    {/*egestas fringilla sapien.*/}
                </p>

                <div className="mt-10 max-w-2xl">
                    <p>

                        They already have figma design and my responsibility is translating the UI.
                        The project already setup using NextJS and AntDesign Components but still have a lot to do.

                        {/*Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae*/}
                        {/*sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.*/}
                        {/*Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae*/}
                        {/*sed turpis id.*/}
                    </p>
                </div>

                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                        <span>
                            <strong className="font-semibold text-gray-900">AntDesign. </strong>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                        </span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                        <span>
                            <strong className="font-semibold text-gray-900">TailwindCSS.</strong>
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                        </span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                        <span>
                            <strong className="font-semibold text-gray-900">Zustand.</strong>
                            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                        </span>
                    </li>
                </ul>
            </div>

            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">

                <figure className="mt-16">
                    <Image src={"/haup/haup_home_page.webp"}
                           className="bg-gray-50 object-cover border border-gray-200 rounded-lg"
                           alt="Work sample" width={1000} height={300} />
                    <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
                        Home page
                    </figcaption>
                </figure>


                <div>
                    <ul>
                        <li>Summary</li>
                        <li>The Challenge</li>
                        <li>Designing the solution</li>
                    </ul>
                </div>

                <p className="mt-6 text-xl/8">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                    egestas fringilla sapien.
                </p>
                <div className="mt-10 max-w-2xl">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                            <span>
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                            <span>
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-gray-600" />
                            <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                        adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>
                    <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                        From beginner to expert in 3 hours
                    </h2>
                    <p className="mt-6">
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                        Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                        mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                        ipsum eu a sed convallis diam.
                    </p>
                    <figure className="mt-10 border-l border-gray-600 pl-9">
                        <blockquote className="font-semibold text-gray-900">
                            <p>
                                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                                dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                                tristique.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-6 flex gap-x-4">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="size-6 flex-none rounded-full bg-gray-50"
                            />
                            <div className="text-sm/6">
                                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
                            </div>
                        </figcaption>
                    </figure>
                    <p className="mt-10">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    </p>
                </div>
                <figure className="mt-16">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure>
                <div className="mt-16 max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                        Everything you need to get up and running
                    </h2>
                    <p className="mt-6">
                        Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
                        amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
                        Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
                        ac. Cras fermentum convallis quam.
                    </p>
                    <p className="mt-8">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center w-full py-10">
                <figure className="mt-16">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure>
            </div>
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <div className="mt-16 max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                        Detail you need to get up and running
                    </h2>
                    <p className="mt-6">
                        Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
                        amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
                        Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
                        ac. Cras fermentum convallis quam.
                    </p>
                    <p className="mt-8">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                    </p>
                </div>
            </div>
        </div>
    )
}