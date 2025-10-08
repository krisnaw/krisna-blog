export default function MdxLayout({children}: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className=" mx-auto max-w-7xl p-4">
      Hey this is layout

      {children}
    </div>
  )
}