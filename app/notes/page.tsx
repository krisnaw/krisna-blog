import {NOTES} from "@/app/notes/NOTES";
import {NoteItem} from "@/app/notes/note-item";

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
          <ul role="list" className=" space-y-3.5">

            {NOTES.map((note,) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}