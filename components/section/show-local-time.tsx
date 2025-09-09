"use client"
import {useState} from "react";

export default function ShowLocalTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

    setTimeout(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

  return (
    <div>
      {time} Local time
    </div>
  )
}