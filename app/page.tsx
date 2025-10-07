import About from "@/app/about";

import {Plus_Jakarta_Sans} from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export default function Page() {
   return (
       <div>

         <About />

         <div className={`h-screen bg-white ${jakartaSans}`}>
           Whereas disregard and contempt for human rights have resulted
         </div>

       </div>
   )
}
