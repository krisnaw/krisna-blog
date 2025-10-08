import React from "react";

export default function Layout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow bg-sky-100 h-screen overflow-auto">
      <div className="mx-auto max-w-xl pt-24">
        {children}
      </div>
    </div>
  )
}