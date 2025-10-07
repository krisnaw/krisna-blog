import About from "@/app/about";

import {Plus_Jakarta_Sans} from 'next/font/google'
import FloatingMenu from "@/app/floating-menu";

// If loading a variable font, you don't need to specify the font weight
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (
    <div className="relative">

      <About/>

      <div className={`h-screen bg-white ${jakartaSans}`}>
        <div className="mx-auto max-w-xl">
          Whereas disregard and contempt for human rights have resulted
        </div>
      </div>

      <FloatingMenu />
    </div>
  )
}
