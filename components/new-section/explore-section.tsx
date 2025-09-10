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

          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow-sm flex flex-col">
            <div className="px-4 py-2.5 sm:px-6 flex justify-between items-center">

              <div className="text-lg font-semibold text-muted-foreground">
                Animation Height
              </div>

              <div className="shrink-0">
                <img className="border border-gray-200 rounded-lg" width="45" height="45" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" />
              </div>

            </div>
            <div className="px-4 py-5 sm:p-6 flex-grow">
              <HeighAnimation />
            </div>
            <div className="px-4 py-4 sm:px-6 bg-blue-100/50">
              <p className="opacity-70">
                Click the button to animate the height of the box. This animation was built using Framer Motion.
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow-sm flex flex-col">
            <div className="px-4 py-2.5 sm:px-6 flex justify-between items-center">

              <div className="text-lg font-semibold text-muted-foreground">
                Animate Presence
              </div>

              <div className="shrink-0">
                <img className="border border-gray-200 rounded-lg" width="45" height="45" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" />
              </div>

            </div>
            <div className="px-4 py-5 sm:p-6 flex-grow">
              <ButtonSendLink />
            </div>
            <div className="px-4 py-4 sm:px-6 bg-blue-100/50">
              <p className="opacity-70">
                Click the button to see animate the presence of the button. This animation was built using Framer Motion.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}