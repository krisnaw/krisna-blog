import {Suspense} from "react";
import BackButton from "@/app/notes/(post)/back-button";
import {MainContent} from "@/app/notes/(post)/main-content";
import {getPosts} from "@/app/notes/getPosts";
import {Header} from "@/app/notes/(post)/header";

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
  const posts = getPosts();
  return (
    <div className={`relative  px-4 sm:px-6 lg:px-8`}>

      <nav className="z-30 lg:sticky lg:top-0">

        <div className="h-14 py-4">
          <Suspense>
            <BackButton />
          </Suspense>
        </div>

      </nav>

      <div className="pt-6 pb-40 mx-auto max-w-5xl">
        <Header posts={posts} />
        <div className="mt-8 px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-3xl">
          <Suspense fallback={<div>Loading</div>}>
            <MainContent>{children}</MainContent>
          </Suspense>
        </div>
      </div>

    </div>
  )
}