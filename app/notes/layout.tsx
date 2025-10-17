import {Merriweather} from 'next/font/google'
import type {Metadata} from "next";

// If loading a variable font, you don't need to specify the font weight
const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Krisna Wijaya | Notes",
  description: "A collection of complete ideas, thoughts, articles, and writings",
};


export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className={`${merriweather.className} bg-neutral-100 min-h-screen`}>
      {children}
    </div>
  )
}