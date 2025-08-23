import {BoardHeader} from "@/components/trelix/board-header";
import {BoardContent} from "@/components/trelix/board-content";
import {Button, Textarea} from "@headlessui/react";
import {Plus} from "lucide-react";
import {parseAsInteger, useQueryState} from "nuqs";

export function Board({boardId}: { boardId: number }) {

  const [isEditing, setIsEditing] = useQueryState('edit', parseAsInteger.withDefault(0))

  console.log(isEditing ? `editing ${boardId}` : `viewing ${boardId}`);

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

  const onClickEdit = () => {
    setIsEditing(boardId)
  }

  const onClickCancelEdit = () => {

    setIsEditing(null)
  }

  return (
    <div className="shadow-md  bg-slate-100 rounded-lg  w-80">
      <BoardHeader/>

      <BoardContent notes={notes}/>

      <div className="p-2">

        {isEditing == boardId ? (
          <div className="w-full">
            <Textarea className="bg-white w-full rounded-lg"/>
            <div className="flex justify-between rounded-md">
              <Button onClick={() => onClickCancelEdit()}>Save</Button>
              <Button onClick={() => onClickCancelEdit()}>Cancel</Button>
            </div>
          </div>
        ) : (
          <Button type="button" onClick={() => onClickEdit()}
                  className="inline-flex font-semibold text-slate-500 hover:bg-slate-200 focus:bg-slate-200 hover:cursor-pointer rounded-lg w-full p-2 gap-2">
            <Plus/>Add Board
          </Button>
        )

        }


      </div>
    </div>
  )
}