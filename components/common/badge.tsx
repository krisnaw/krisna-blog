import React from "react";

export function Badge({children} : {children: React.ReactNode}) {
  return (
    <span className="gap-1 inline-flex items-center rounded-full bg-gray-50 px-3.5 py-1 text-sm font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
      {children}
    </span>
  )
}