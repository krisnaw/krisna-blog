export function Button({children} : {children: React.ReactNode}) {
  return (
    <button
      className="
        transition-transform duration-150 transform active:scale-95
      inline-flex items-center gap-x-1.5 px-2.5 py-1.5 text-xs font-semibold text-gray-600 inset-ring inset-ring-neutral-300 rounded-lg
      bg-white hover:bg-neutral-100 active:bg-neutral-200">
      {children}
    </button>
  )
}