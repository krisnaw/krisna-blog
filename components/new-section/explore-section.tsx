import {ButtonSendLink} from "@/components/animations/button-send-link/button-send-link";
import HeighAnimation from "@/components/animations/heigh-animation/height-anima";

export default function ExploreSection() {
  return (
    <section className="py-20 border-t border-gray-300">
      <div className="max-w-xl">
        <div>
          <h1 className="uppercase text-7xl tracking-tighter text-balance">Exploration.</h1>
          <p className="font-light opacity-70 mt-2.5">
            We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
            Our recent work reflects our commitment to helping clients achieve their goals.
          </p>
        </div>
      </div>


      <div className="mt-10">

        <div className="grid grid-cols-2 gap-4">

          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="w-full flex justify-center items-center  rounded-t-lg py-6">
              <HeighAnimation />
            </div>
            <div className="w-full px-6 py-4 border-t border-gray-300 transition-max-height duration-300 ease-in-out max-h-96 overflow-auto">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-muted-foreground">
                  Animating height
                </div>
                <div>
                  <img width="45" height="45" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-l">
            <div>
              Animation using Framer Motion
            </div>
            <ButtonSendLink />
          </div>

          <div className="border border-gray-300 rounded-l">
            <ButtonSendLink />
          </div>

          <div className="border border-gray-300 rounded-l">
            <ButtonSendLink />
          </div>

        </div>
      </div>
    </section>
  )
}