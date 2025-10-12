export default function Page() {
  return (
    <div>
      <div className="text-3xl font-semibold text-left w-full">
        Notes
      </div>
      <div className="mt-10">
        <ul role="list" className="divide-y divide-gray-100 space-y-2.5">

          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index} className="pb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  <a href={`/notes/sample`} className="hover:underline">
                    How to build a successful team
                  </a>
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Communication comes first. High‑quality results depend on both individual skill and
                  seamless collaboration with directors, designers, and the rest of the team.
                </p>
              </div>

              <div className="mt-2 flex justify-between">
                <div className="text-sm text-gray-500">
                  <time dateTime="2022-01-01">January 1, 2022</time>
                </div>
              </div>
            </li>
          ))}


        </ul>
      </div>
    </div>
  )
}