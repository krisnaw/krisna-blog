import {Merriweather} from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
})
export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className={`${merriweather.className} mx-auto max-w-3xl px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  )
}