import {ArrowLeft} from "lucide-react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4">
        <ArrowLeft />
      </div>
      <div className="prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  )
}