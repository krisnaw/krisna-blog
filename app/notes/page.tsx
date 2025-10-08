export default function Page() {
  return (
    <div>
      <div className="text-3xl font-semibold">
        Notes
      </div>
      <div>

        <ul className="divide-y divide-gray-300">
          {Array.from({ length: 5 }, (_, i) => (
            <li key={i} className="flex py-4">
              <div className="mr-4 shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="size-16 border border-gray-300 bg-white text-gray-300"
                >
                  <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Lorem ipsum</h4>
                <p className="mt-1 text-gray-500">
                  {new Date().toDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>


      </div>
    </div>
  )
}