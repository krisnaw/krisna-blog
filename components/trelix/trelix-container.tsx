"use client";
import {Board} from "@/components/trelix/board";
import {Button} from "@/components/ui/button";

export type Note = {
  id: number
  title: string
  content: string
}

export type Board = {
  id: number
  title: string
  notes: Note[]
}

export function TrelixContainer() {

  const boards : Board[] = [
    {
      id: 1,
      title: 'Board 1',
      notes: []
    },
    {
      id: 2,
      title: 'Board 2',
      notes: []
    },
    {
      id: 3,
      title: 'Board 3',
      notes: []
    },
  ]

  return (
    <div>
      <div className="flex-shrink-0  flex flex-row space-x-4">
        {boards.map((board) => (
          <Board key={board.id} boardId={board.id} />
        ))}
        <div>
          <Button>Add board</Button>
        </div>
      </div>
    </div>
  )
}