import HeighAnimation from "@/components/animations/heigh-animation/height-anima";

export default function ExploreSection() {
  return (
    <section className="py-20 border-t border-gray-300">
      <div>
        <div>
          <h1 className="uppercase text-7xl tracking-tighter text-balance">Animation Exploration.</h1>
          <div className="mt-2.5">
            <p className="font-light opacity-70 mt-2.5">
              Animations improve <b>perceived performance and user experience (UX).</b> <br/>
              It demonstrates how subtle motion can bring interfaces to life, making the experience more engaging and intuitive.<br/>
              Explore these effects to see how animation elevates modern web design.
            </p>
          </div>
        </div>
      </div>


      <div className="mt-10">

        <div className="grid grid-cols-2 gap-8">

          <div className="border border-gray-300 rounded-lg overflow-hidden">

            <div className="w-full flex justify-center items-center  rounded-t-lg py-6">
              <HeighAnimation />
            </div>

            <div className="w-full px-6 py-4 border-t border-gray-300 transition-max-height duration-300 ease-in-out  overflow-auto">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold text-muted-foreground">
                    Animating Height
                  </div>
                  <p className="font-light opacity-70">
                    Click the button to animate the height of the box. This animation was built using Framer Motion.
                  </p>
                </div>
                <div className="shrink-0">
                  <img className="border border-gray-200 rounded-lg" width="45" height="45" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden">

            <div className="w-full flex justify-center items-center  rounded-t-lg py-6">
              <HeighAnimation />
            </div>

            <div className="w-full px-6 py-4 border-t border-gray-300 transition-max-height duration-300 ease-in-out  overflow-auto">
              <div className="flex items-start justify-between">
                <div className=" max-w-xs">
                  <div className="text-lg font-semibold text-muted-foreground">
                    Animating Height
                  </div>
                  <p className="font-light opacity-70 mt-1.5">
                    Click the button to animate the height of the box. This animation was built using Framer Motion.
                  </p>
                </div>
                <div className="shrink-0">
                  <img className="border border-gray-200 rounded-lg" width="45" height="45" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}