import nextsvg from '../../public/next.svg'
import Image from "next/image";

export default function ExpSection() {
  return (
    <section className="py-20 border-t border-gray-300">
      <div>
        <div>
          <h1 className="uppercase text-7xl tracking-tighter text-balance">Work Experiences.</h1>
          <p className="font-light opacity-70 mt-2.5">
            We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
            Our recent work reflects our commitment to helping clients achieve their goals.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="max-w-5xl">
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

                  <div>
                    <ul className="flex ">
                      <li className="border border-gray-200 p-2.5">
                        <Image src={nextsvg} alt="Next logo" />
                      </li>

                    </ul>
                  </div>


                  <div>
                    <ul className="list-disc list-inside">
                      {item.todos.map((todo, index) => (
                        <li key={index}>
                          {todo}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

const navigation = [
  {
    id: 1,
    year: 'January 2025 - March 2025',
    title: 'FrontEnd Developer',
    company: 'HaupCar',
    descriptions: 'Contributing to the front-end development of Haup Car’s long-term booking system, a feature enabling customers to\n' +
      'rent vehicles for extended durations.',
    todos: [
      "sdf",
      "sdf"
    ],
    type: 'Contract'
  },

  {
    id: 2,
    year: 'May 2016 - March 2024',
    title: 'Full-stack Developer',
    company: 'C2 Media',
    descriptions: 'Developed ContentGrow, a web application that connects freelance talent with global content teams and streamlines\n' +
      'editorial workflows.',
    todos: [
      "sdf",
      "sdf"
    ],
    type: 'Full time'
  },

  {
    id: 3,
    year: 'July 2014 - May 2016',
    title: 'Tech Writer',
    company: 'Tech in Asia',
    descriptions: 'Researched and interviewed tech startup founders in Indonesia to write feature stories for Tech in Asia',
    todos: [
      "sdf",
      "sdf"
    ],
    type: 'Full time'
  },
]