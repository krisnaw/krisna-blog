export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className=" h-screen pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}