export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gradient-to-t from-sky-100/20 via-sky-200 to-sky-200/50 py-20 px-32">

      {/*HEADER*/}
      <header className="mx-auto max-w-3xl">
        <div className="pt-20 pb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Understanding the JavaScript Modulo Operator
          </h2>
          <p className="font-medium text-lg text-gray-700 mt-4">
            Published on September 6th, 2023
          </p>
        </div>
      </header>

      <div className="bg-white text-neutral-600  rounded-xl shadow-2xl">
        <div className="mx-auto max-w-3xl py-12">
          <div className="prose prose-sm sm:prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>

      <footer className="py-20">
        <div className="mx-auto max-w-3xl">
          This is footer
        </div>
      </footer>

    </div>
  )
}
