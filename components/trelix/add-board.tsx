import {Plus} from "lucide-react";
import {Button, Textarea} from "@headlessui/react";
import {useState} from "react";

export function AddBoard() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="p-2">

      {isEditing && (
        <div className="w-full">
          <Textarea className="bg-white w-full" />
          <div className="flex justify-between rounded-md">
            <Button>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </div>
      )}

      {!isEditing && (
        <Button type="button" onClick={() => setIsEditing(!isEditing)}
                className="inline-flex font-semibold text-slate-500 hover:bg-slate-200 focus:bg-slate-200 hover:cursor-pointer rounded-lg w-full p-2 gap-2">
          <Plus />Add Board
        </Button>
      )}

    </div>
  )
}