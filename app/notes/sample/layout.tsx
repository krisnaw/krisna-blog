import {ArrowLeft} from "lucide-react";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="fixed left-1/5 mt-2 hidden sm:block">
        <Link href="/notes">
          <ArrowLeft />
        </Link>
      </div>
      <div className="prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  )
}