import HeroSection from "@/components/section/hero.section";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

      <HeroSection />

      <section id="animation">
        <div>
          <h5 className="mt-16 pb-2 text-lg sm:text-xl border-b border-gray-200">
            Animation for the web
          </h5>
        </div>

        <div className="mt-6 rounded-3xl outline-1 outline-gray-200 sm:flex p-8">
          <img src="https://static.sizu.me/images/contents/editor.png" alt="image" className="rounded-3xl"/>
        </div>
      </section>

    </div>
  )
}