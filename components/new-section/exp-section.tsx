export default function ExpSection() {
  return (
    <section className="py-20 border-t border-gray-300">
      <div>
        <div>
          <h1 className="uppercase text-7xl tracking-tighter text-balance">Work Experiences.</h1>
          <p className="font-light opacity-70 mt-2.5">
            An overview of my past roles and experiences that shaped my career as a frontend engineer.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="max-w-5xl">
          <div className="grid grid-cols-1 divide-indigo-100 dark:divide-gray-800 divide-y gap-10">
            {navigation.map((item) => (
              <div className="sm:flex sm:gap-10 pb-4 sm:pb-6" key={item.id}>

                <div className="flex-shrink-0 w-64">
                  <div className="text-gray-500 font-bold">
                    {item.year}
                  </div>
                  <div className="text-gray-600 font-light">
                    {item.type}
                  </div>
                </div>

                <div className="mt-2.5 w-full">
                  <h3 className="font-semibold text-muted-foreground text-lg">{item.title} at {item.company}</h3>
                  <p className="text-gray-500 mt-2">
                    {item.descriptions}
                  </p>

                  {item && item.todos && item.todos.length > 0 && (
                    <div>
                      <ul className="flex flex-wrap gap-2 mt-4">
                        {item.todos.map((todo, index) => (
                          <li key={index}>
                            <div className="bg-gray-200/50 text-muted-foreground px-2 py-1 inset-ring inset-ring-gray-300">
                              {todo}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

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
      "Next.js", "React.js", "AntDesign", "Zustand", "TailwindCSS", "Figma", "Jira",  "TypeScript", "GIT", "Gitlab", "CSS"
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
      "Laravel",
      "TailwindCSS",
      "Figma",
      "AWS EC2", "AWS RDS", "DynamoDB", "AWS Lambda",
      "Vue", "Jenkins", "Sendgrid", "Pusher", "CSS", "HTML"
    ],
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