export default function RecentProject() {
  return (
    <section className="border-t border-gray-200 pt-24">

      <div>
        <div className="max-w-2xl">
          <div>
            <h1 className="uppercase text-7xl">Recent Project.</h1>
            <p className="font-light opacity-70 mt-2.5">
              We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
              Our recent work reflects our commitment to helping clients achieve their goals.
            </p>
          </div>

        </div>

        <div className="underline uppercase mt-6">
          <a href="">View all</a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-16">


        <div>
          <img src="https://cdn.prod.website-files.com/655cac10f5959da4937eb534/68aee08b7ab19b0956dafedd_Done_Thumb.png" alt=""/>
          <div>
            <h4>
              DONE DRINKS
            </h4>
            <p>
              We helped Done Drinks launch a site that looks as good as it tastes. Clean layout, crisp storytelling, and motion that adds just enough spice. Built in Webflow.
            </p>
          </div>
        </div>

        <div>
          <img src="https://cdn.prod.website-files.com/655cac10f5959da4937eb534/68aee08b7ab19b0956dafedd_Done_Thumb.png" alt=""/>
          <div>
            <h4>
              DONE DRINKS
            </h4>
            <p>
              We helped Done Drinks launch a site that looks as good as it tastes. Clean layout, crisp storytelling, and motion that adds just enough spice. Built in Webflow.
            </p>
          </div>
        </div>

      </div>


    </section>
  )
}