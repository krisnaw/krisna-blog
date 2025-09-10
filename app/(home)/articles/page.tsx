export default function Page() {
    return (
      <section className="py-20 border-t border-gray-300">
        <div className="max-w-xl">
          <div>
            <h1 className="uppercase text-7xl tracking-tighter text-balance">Articles.</h1>
            <p className="font-light opacity-70 mt-2.5">
              We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
              Our recent work reflects our commitment to helping clients achieve their goals.
            </p>
          </div>
        </div>

        <div className="max-w-xl">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="py-4 border-b-2 border-dashed border-blue-600 hover:bg-blue-500 hover:text-white">

              <div className="inline-flex items-center gap-2">
                { new Date().toLocaleDateString() }
                <p>Our recent work reflects our commitment to helping clients achieve their goals</p>
              </div>

            </div>
          ))}
        </div>
      </section>
    )
}