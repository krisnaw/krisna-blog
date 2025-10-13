const NOTES = [
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
    <div>
      <div className="text-3xl font-semibold text-left w-full">
        Notes
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

              <div className="mt-2 flex justify-between">
                <div className="text-sm text-gray-500">
                  <time dateTime={note.date}>{note.date}</time>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}