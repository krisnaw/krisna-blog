type Note = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const NOTES : Note[] = [
  {
    id: crypto.randomUUID(),
    slug: "scroll-driven-animation",
    title: "CSS Scroll driven animation",
    date: "16 October 2025",
    excerpt: "CSS scroll-driven animations module provides functionality that builds on top of the CSS animations module and Web Animations API.",
  },
  {
    id: crypto.randomUUID(),
    slug: "book",
    title: "Book I've read",
    date: "13 October 2025",
    excerpt: "Communication comes first. High‑quality results depend on both individual skill and\n" +
      "                  seamless collaboration with directors, designers, and the rest of the team."
  }
];

export default function Page() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8r">
        <div>
          <h1 className="text-3xl font-semibold text-left w-full">
            Notes
          </h1>
          <p className="mt-4 text-gray-500">
            A tight collection of complete ideas, thoughts, articles, and writings.
          </p>
        </div>
        <div className="mt-10">
          <ul role="list" className="divide-y divide-gray-100 space-y-2.5">

            {NOTES.map((note,) => (
              <li key={note.id} className="pb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <a href={`/notes/${note.slug}`} className="hover:underline">
                      { note.title }
                    </a>
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {note.excerpt}
                  </p>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}