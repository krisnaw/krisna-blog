import {NOTES} from "@/app/notes/NOTES";

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