import Image from "next/image";
import Link from "next/link";

export default function RecentProjectSection() {
  return (
    <section className="py-20 border-t border-gray-300">

      <div className="max-w-xl">
        <div>
          <h1 className="uppercase text-7xl tracking-tighter text-balance">Recent Project.</h1>
          <p className="font-light opacity-70 mt-2.5">
            We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
            Our recent work reflects our commitment to helping clients achieve their goals.
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4 mt-14 p-10 border border-blue-200">

        {projects.map((item) => (
          <Link href={item.href} key={item.id}>
            <div>
              <Image src={item.image_url} className="border border-gray-200"
                     alt="Work sample" width={1000} height={300} />
            </div>

            <div className="mt-4">
              <h4 className="uppercase font-semibold text-2xl">
                {item.title}
              </h4>
              <p className="mt-2.5 tracking-wide font-light">
                {item.descriptions}
              </p>
            </div>
          </Link>
        ))}

      </div>

    </section>
  )
}


const projects = [
  {
    id: 1,
    title: 'Crafting booking interface for long term rental at HaupCar',
    descriptions: 'HaupCar is a Thailand-based car rental company, and they plan to revamp the UI of their long-term car rental feature, also migrating their API to a newer version.',
    href: '/projects/haup',
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