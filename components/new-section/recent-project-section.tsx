import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/new-section/section-header";

export default function RecentProjectSection() {
  return (
    <section className="py-20 border-t border-gray-300">

      <SectionHeader title="Previous Work." >
        <p className="font-light opacity-70 mt-2.5">
          An overview of the companies and projects where I contributed to building frontends, crafting smooth user experiences, and shipping reliable web applications.
        </p>
      </SectionHeader>


      <div className="grid grid-cols-1 gap-4 mt-14 p-4 border border-blue-300 p-10">
        {projects.map((item) => (
          <Link href={item.href} key={item.id}>
            <div>
              <Image src={item.image_url} className="border border-gray-200 "
                     alt="Work sample" width={1000} height={300} />
            </div>

            <div className="mt-4">
              <h4 className="uppercase font-semibold text-lg sm:text-xl opacity-70">
                {item.title}
              </h4>
              <p className="mt-2.5 tracking-wide font-light text-sm sm:text-base opacity-70">
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