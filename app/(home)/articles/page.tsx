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

          <div>
            <div className="flex space-x-10">
              <div>
                { new Date().toLocaleDateString()}
              </div>
              <div className="font-bold text-lg">
                The product design talent crisis
              </div>
            </div>
            <div className="mt-2.5 text-muted-foreground font-semibold">
              The demand for product designers at the top of the talent pool is happening at the cost of junior and entry-level roles.
              We need to reverse this trend to ensure a healthy future of our practice.
            </div>
          </div>


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