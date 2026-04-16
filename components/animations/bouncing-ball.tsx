import type {CSSProperties} from "react"
import style from "./bouncing-ball.module.css"

export const BouncingBall = () => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-4 outline outline-gray-200 h-48 flex content-end">
      <div className="relative flex items-end gap-4 px-4 border-b-2 border-gray-800 rounded-lg">
        {items.map((item, i) => {
          return (
            <div key={i} className={`size-14 shadow-lg bg-linear-to-t from-sky-500 to-indigo-500 rounded-full ${style.ball}`}
                 style={{
                   '--distance': item.distance,
                   '--duration': item.duration,
                 } as CSSProperties}
            />
          )
        })}
      </div>
    </div>
  )
}

const items = [
  {
    distance: '30px',
    duration: '300ms'
  },
  {
    distance: '50px',
    duration: '400ms'
  },

  {
    distance: '70px',
    duration: '500ms'
  },
]