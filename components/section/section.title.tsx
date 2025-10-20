import React from "react";

export function SectionTitle({children}: { children: React.ReactNode}) {
  return (
    <h2 className="mb-6 font-bold text-gray-500 tracking-wide">
      {children}
    </h2>
  )
}