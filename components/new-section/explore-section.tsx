import HeighAnimation from "@/components/animations/heigh-animation/height-anima";
import {ButtonSendLink} from "@/components/animations/button-send-link/button-send-link";

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


      <div className="mt-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div className="divide-y divide-gray-300 overflow-hidden rounded-lg shadow-sm border border-gray-300 flex flex-col">

            <div className="px-4 py-5 sm:p-6 flex-grow flex items-center justify-center">
              <HeighAnimation />
            </div>

            <div className="px-4 py-4 sm:px-6 bg-gray-200/50">
              <div className="text-lg font-semibold text-muted-foreground">
                Animation Height
              </div>
              <p className="opacity-70">
                Click the button to animate the height of the box.
              </p>
            </div>

          </div>

          <div className="divide-y divide-gray-300 overflow-hidden rounded-lg shadow-sm border border-gray-300  flex flex-col">
            <div className="px-4 py-5 sm:p-6 flex-grow">
              <ButtonSendLink />
            </div>
            <div className="px-4 py-4 sm:px-6 bg-gray-200/50">
              <div className="text-lg font-semibold text-muted-foreground">
                Animate Presence
              </div>
              <p className="opacity-70">
                Click to see animate the presence of the button.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}