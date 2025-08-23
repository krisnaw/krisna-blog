import {BoardHeader} from "@/components/trelix/board-header";
import {BoardContent} from "@/components/trelix/board-content";
import {AddBoard} from "@/components/trelix/add-board";

export type Note = {
  id: number
  title: string
  content: string
}

export function Board() {

  const notes = [
    {
      id: 1,
      title: "Note 1",
      content: "This is note 1",
    },
    {
      id: 2,
      title: "Note 2",
      content: "This is note 2",
    },
    {
      id: 3,
      title: "Note 3",
      content: "This is note 3",
    }
  ]

  return (
    <div className="shadow-md  bg-slate-100 rounded-lg  w-80">
      <BoardHeader />

      <BoardContent notes={notes} />

      <AddBoard />
    </div>
  )
}