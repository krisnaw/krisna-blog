import {LinearIcon} from "@/app/(sketch)/linear/linear-icon";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
    <div>

      <header className="relative bg-white shadow-sm">

        <nav className="flex justify-between items-center mx-auto max-w-5xl p-4 lg:px-8">

          <div>
            <a href="/linear">
              <LinearIcon height={18} className="text-gray-800"/>
            </a>
          </div>

          <div>

            <ul className="inline-flex justify-between gap-2">
              {OPTIONS.map((option) => (
                <li key={option.id}>
                  <a href=""
                     className="font-medium text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900 py-2.5 px-2.5 rounded-lg">
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <ul className="inline-flex items-center gap-2.5">
              <li>
                <a href=""
                   className="font-medium text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900 py-2.5 px-3.5 rounded-lg">
                  Login
                </a>
              </li>
              <li>
                <Button size="sm">
                  Sign up
                </Button>
              </li>
            </ul>
          </div>

        </nav>

      </header>

    </div>
  )
}

const OPTIONS = [
  {
    id: crypto.randomUUID(),
    name: "Product",
  },
  {
    id: crypto.randomUUID(),
    name: "Resources",
  }, {
    id: crypto.randomUUID(),
    name: "Pricing",
  },
  {
    id: crypto.randomUUID(),
    name: "Customers",
  },
  {
    id: crypto.randomUUID(),
    name: "Now",
  },
  {
    id: crypto.randomUUID(),
    name: "Contact",
  }
]