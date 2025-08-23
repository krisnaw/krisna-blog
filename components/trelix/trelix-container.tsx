"use client";
import {Board} from "@/components/trelix/board";

export function TrelixContainer() {

  const boards = 1

  return (
    <div>
      <div className="flex-shrink-0  flex flex-row space-x-4">

        {Array.from({ length: boards }, (_, index) => (
          <Board key={index} />
        ))}

      </div>
    </div>
  )
}