export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className="bg-pink-200 flex flex-col h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex-grow">
        {children}
      </div>
    </div>
  )
}