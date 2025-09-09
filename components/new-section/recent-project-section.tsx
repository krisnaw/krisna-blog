export default function RecentProjectSection() {
  return (
    <section className="py-24 border-t border-gray-300">

      <div>
        <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="uppercase text-7xl tracking-tighter text-balance">Recent Project.</h1>
            <p className="font-light opacity-70 mt-2.5">
              We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
              Our recent work reflects our commitment to helping clients achieve their goals.
            </p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6">

        <div>
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <img src="https://cdn.prod.website-files.com/5e8545568347402d733f53f2/6751a28778799b349337b12d_Frame%204912-p-800.webp" alt=""/>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <h4 className="uppercase font-semibold text-2xl">
              DONE DRINKS
            </h4>
            <p className="mt-2.5 tracking-wide font-light">
              We helped Done Drinks launch a site that looks as good as it tastes. Clean layout, crisp storytelling, and motion that adds just enough spice. Built in Webflow.
            </p>
          </div>
        </div>

        <div>
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <img src="https://cdn.prod.website-files.com/5e8545568347402d733f53f2/6751a28778799b349337b12d_Frame%204912-p-800.webp" alt=""/>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <h4 className="uppercase font-semibold text-2xl">
              DONE DRINKS
            </h4>
            <p className="mt-2.5 tracking-wide font-light">
              We helped Done Drinks launch a site that looks as good as it tastes. Clean layout, crisp storytelling, and motion that adds just enough spice. Built in Webflow.
            </p>
          </div>
        </div>



      </div>

    </section>
  )
}