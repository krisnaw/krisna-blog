import FloatingMenu from "@/app/floating-menu";

export default function Page() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">

      <section className="bg-sky-200 h-screen">
        Hero section
      </section>

      <section className="bg-amber-200 h-screen">
        Feature section
      </section>

      <FloatingMenu />

    </div>
  )
}