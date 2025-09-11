"use client"

export default function TechStackMarquee() {
  return (
    <div className="outline-amber-300 outline-2">
      <ul className="flex">

        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="border border-gray-300 p-4">
            {index + 1}
          </li>
        ))}

      </ul>
    </div>
  )
}