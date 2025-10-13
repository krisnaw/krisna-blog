import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import {Suspense, unstable_ViewTransition as ViewTransition} from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative`}>
      <div className="fixed left-1/5 mt-2 hidden sm:block">
        <button className="
        transition-transform duration-150 transform active:scale-95
        p-1 rounded-full outline-1 outline-gray-200 bg-white shadow-md">
          <Link href="/notes">
            <ArrowLeft />
          </Link>
        </button>

      </div>
      <ViewTransition>
        <Suspense fallback={<div>Loading</div>}>
          <div className="prose prose-sm max-w-none">
            {children}
          </div>
        </Suspense>
      </ViewTransition>
    </div>
  )
}