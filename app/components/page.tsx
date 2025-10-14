import {Button} from "@headlessui/react";

export default function Page() {
  return (
    <div>
      Component based on React Aria
      <div>
        <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700">
          Save changes
        </Button>
      </div>
    </div>
  )
}
