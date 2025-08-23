import {useState} from "react";
import {Input} from "@/components/ui/input";

export function BoardHeader() {
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="p-2 hover:cursor-pointer" onClick={handleEdit}>

      {!isEditing && (
        <div className="py-1 px-2 font-medium text-slate-600 ">
          Board Header
        </div>
      )}

      {isEditing && (
        <div>
          <Input className="bg-white" />
        </div>
      )}

    </div>
  )
}