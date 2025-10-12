"use client"

import {useEffect, useState} from "react";

export default function HeaderSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      // Update the state with a new Date object every second
      setCurrentTime(new Date());
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); //

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-2.5">
        <p className="text-xs uppercase tracking-tighter">current time</p>
        <p suppressHydrationWarning={true}>{currentTime.toLocaleTimeString()}</p>
      </div>
    </header>
  )
}