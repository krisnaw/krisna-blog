'use client'
import {CSSProperties, useState} from "react"
import style from "./bouncing-ball.module.css"
import {Button} from "@/components/ui/button";

export const BouncingBall = () => {
  const [playing, setPlaying] = useState(true)

  return (
    <div className="flex flex-col justify-between space-y-8 max-w-sm mx-auto">
      <div className="min-h-36 justify-self-end  content-end">
        <div className="relative flex items-end gap-4 px-4 border-b-4 border-indigo-400">
          {items.map((item, i) => {
            return (
              <div key={i} className={`size-14 shadow-lg bg-linear-to-t from-sky-500 to-indigo-500 rounded-full ${style.ball}`}
                   style={{
                     '--distance': item.distance,
                     '--duration': item.duration,
                     animationPlayState: playing ? 'running' : 'paused',
                   } as CSSProperties}
              />
            )
          })}
        </div>
      </div>

      <Button className="rounded-full"
        variant={playing ? 'outline': 'default'}
        aria-pressed={playing}
        onClick={() => setPlaying((current) => !current)}
      >
        {playing ? 'Stop Animation': 'Play Animation'}
      </Button>
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
  {
    distance: '80px',
    duration: '600ms'
  },
  {
    distance: '90px',
    duration: '700ms'
  },
]
