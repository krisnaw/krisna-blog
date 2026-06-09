import type {Metadata} from "next"
import Link from "next/link"
import {SiteLayout} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"

export const metadata: Metadata = {
  title: "Frontend Interview Docs | Krisna Wijaya",
  description: "Frontend interview preparation index for JavaScript, components, TypeScript, and system-style UI problems.",
}

const sections = [
  {
    title: "JavaScript",
    slug: "javascript",
    groups: [
      {level: "Easy", topics: ["Detect Type", "Debounce", "Throttle", "ES5 Inheritance"]},
      {level: "Medium", topics: ["Deep Equals", "Deep Clone", "Stringify", "Promise"]},
      {level: "Hard", topics: ["Tree Select"]},
    ],
  },
  {
    title: "Basic Components",
    slug: "basic-components",
    groups: [
      {level: "Easy", topics: ["Accordion", "Star Rating", "Tabs", "Tooltip"]},
      {level: "Medium", topics: ["Dialog", "Table"]},
      {level: "Hard", topics: ["Reddit Thread", "Gallery", "Nested Checkboxes", "Toast"]},
    ],
  },
  {
    title: "Advanced Components",
    slug: "advanced-components",
    groups: [
      {level: "Medium", topics: ["Carousel", "Progress Bar", "Transfer List", "Typeahead"]},
      {level: "Hard", topics: ["File Upload", "Data Grid", "Rich Text Editor"]},
    ],
  },
  {
    title: "Staff Problems",
    slug: "staff-problems",
    groups: [
      {level: "Hard", topics: ["Jira Board", "Twitter Feed", "Flight Booker"]},
    ],
  },
  {
    title: "TypeScript",
    slug: "typescript",
    groups: [
      {level: "Easy", topics: ["Basics", "Generic Constraints"]},
      {level: "Medium", topics: ["Mapped Types", "Conditional Types", "Recursive Types", "Variance"]},
      {level: "Hard", topics: ["Distributive Conditional Types", "Template Literals", "Expert-Level Challenges"]},
    ],
  },
]

const totalTopics = sections.reduce(
  (total, section) =>
    total + section.groups.reduce((sectionTotal, group) => sectionTotal + group.topics.length, 0),
  0,
)

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default function AlgoPage() {
  return (
    <SiteLayout>
      <DirectionalTransition>
        <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12">
          <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[#767676]">
            Documentation
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1
                className="text-[2.5rem] leading-none tracking-[-0.01em] text-[#0d0d0c] sm:text-[3rem]"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Frontend Interview Prep
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#767676]">
                A structured index for JavaScript fundamentals, UI components,
                TypeScript patterns, and product-level frontend exercises.
              </p>
            </div>

            <div className="flex gap-8 border-t pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <Stat label="Topics" value={totalTopics} />
              <Stat label="Complete" value={0} />
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-3xl px-6 pb-24">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const count = section.groups.reduce((total, group) => total + group.topics.length, 0)

              return (
                <section key={section.slug} aria-labelledby={`${section.slug}-title`}>
                  <div className="mb-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#767676]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2
                        id={`${section.slug}-title`}
                        className="mt-1 text-2xl leading-tight text-[#0d0d0c]"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <p className="font-mono text-[10px] tracking-wide text-[#767676]">
                      0 / {count}
                    </p>
                  </div>

                  <div className="divide-y border-y" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    {section.groups.map((group) => (
                      <div key={group.level} className="grid gap-3 py-5 sm:grid-cols-[7rem_1fr]">
                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#767676]">
                          {group.level}
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2" role="list">
                          {group.topics.map((topic) => {
                            const href = `/frontend-prep/${section.slug}/${slugify(topic)}`

                            return (
                              <li key={topic}>
                                <Link
                                  href={href}
                                  transitionTypes={["nav-forward"]}
                                  className="group flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-sm text-[#333] transition-colors duration-150 hover:bg-[#f4f4f2] active:scale-[0.99]"
                                >
                                  <span>{topic}</span>
                                  <span className="font-mono text-[10px] tracking-wide text-[#aaa] transition-colors group-hover:text-[#767676]">
                                    Draft
                                  </span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </main>
      </DirectionalTransition>
    </SiteLayout>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#767676]">
        {label}
      </p>
      <p
        className="mt-1 text-3xl leading-none text-[#0d0d0c]"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        {value}
      </p>
    </div>
  )
}
