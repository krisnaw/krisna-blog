'use client'
import {CSSProperties, useState} from "react"
import style from "./bouncing-ball.module.css"
import {Button} from "@/components/ui/button";

export const BouncingBall = () => {
  const [playing, setPlaying] = useState(true)

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white outline outline-gray-200 w-full">
      <div className="px-4 py-5 sm:px-6 min-h-48 flex justify-center content-end bg-white">
        <div className="relative flex items-end gap-4 px-4 border-b-4 border-gray-200">
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
      <div className="px-4 py-5 sm:px-6 bg-neutral-100/50 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div>
          <p className="text-sm/6 font-semibold text-gray-900">
            Bouncing Animation
          </p>
          <p className="text-sm text-gray-500">
            It uses CSS animation with variable distance and duration.
          </p>
        </div>
        <div className="pl-2 shrink-0 border-l border-gray-200">
          <Button
            size="lg"
            variant={playing ? 'outline': 'default'}
            aria-pressed={playing}
            onClick={() => setPlaying((current) => !current)}
          >
            {playing ? 'Stop Animation': 'Play Animation'}
          </Button>
        </div>
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
  {
    distance: '80px',
    duration: '600ms'
  },
  {
    distance: '90px',
    duration: '700ms'
  },
]
