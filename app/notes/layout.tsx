export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-sky-100/50">
      <header>
        <nav className="px-4 sm:px-6 lg:px-8 py-2.5">
          <ul>
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/notes">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>


      <div className="py-20">
        <div className="mx-auto max-w-xl py-12">
          <div className="prose prose-sm sm:prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-sm pt-12">
        <ul className="flex justify-center items-center space-x-4.5 [&>li]:text-gray-500 [&>li]:font-semibold">
          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/notes">
              Footer
            </a>
          </li>

          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/notes">
              Footer
            </a>
          </li>

          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/notes">
              Footer
            </a>
          </li>
        </ul>
        <div className="text-center mt-6 font-medium text-gray-500">
          ©{" "}  {new Date().getFullYear()} Krisna Wijaya
        </div>
      </footer>
    </div>
  )
}