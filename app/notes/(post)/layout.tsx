import {Suspense} from "react";
import BackButton from "@/app/notes/(post)/back-button";
import {MainContent} from "@/app/notes/(post)/main-content";

export default async function MdxLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className={`relative bg-slate-50`}>
      <header className="z-30 lg:sticky lg:top-0">

        <div className="px-4 sm:px-6 lg:px-8 h-14 py-4">
          <Suspense>
            <BackButton />
          </Suspense>
        </div>

      </header>

      <div className="py-20 mx-auto max-w-3xl">
        <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white rounded-3xl shadow-md">
          <Suspense fallback={<div>Loading</div>}>
            <MainContent>{children}</MainContent>
          </Suspense>
        </div>
      </div>

    </div>
  )
}