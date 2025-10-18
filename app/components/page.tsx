import style from "./anima.module.css"

export default function Page() {
  return (
    <div>
      <header className="border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4">
          <nav className="relative flex h-16 items-center justify-between">
            <a href="">
              Logo
            </a>
            <ul className="inline-flex gap-x-8 font-semibold text-gray-700">
              <li className="inline-flex gap-1 items-center">
                <div className="relative">
                  <div>
                    <span className="hover:text-gray-700/50">Platform services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className={`size-4 ${style.chevronIcon}`}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>
                  </div>
                  <div className="w-96 p-10 border border-gray-200">
                    Container
                  </div>
                </div>
              </li>
              <li>Solutions</li>
              <li>Resources</li>
            </ul>
            <div>
              <button>Request demo</button>
            </div>
          </nav>

        </div>
      </header>


      <main>
      </main>
      <footer>

      </footer>
    </div>
  )
}
