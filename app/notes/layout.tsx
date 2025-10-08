export default function NotesLayout({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-sky-100/20 via-sky-200 to-sky-200/50">
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

      {children}

      <footer className="mx-auto max-w-sm pt-12 pb-10">
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