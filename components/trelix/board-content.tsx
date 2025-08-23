import {Note} from "@/components/trelix/board";

import {Trash2} from "lucide-react";

export function BoardContent({notes} : { notes: Note[]}) {
  if (notes.length === 0) return null
  return (
    <ul className="space-y-2.5">
      {notes.map((note) => (
        <li key={note.id}>
          <div className="bg-white mx-2 px-2 rounded-lg shadow-md relative min-h-16 py-2">
            To display the hand cursor (pointer cursor) for an element in Tailwind CSS, the cursor-pointer utility class is used. This class applies the CSS property cursor: pointer; to the element.
            <Trash2 className="absolute right-2 top-2 font-light
            hover:text-destructive hover:cursor-pointer" size={16} />
          </div>
        </li>
      ))}
    </ul>
  )
}