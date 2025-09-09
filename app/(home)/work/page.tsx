import {ButtonSendLink} from "@/app/(home)/work/button-send-link";

export default function Page() {
  return (
    <div>
      <div>
        <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="uppercase text-7xl tracking-tighter text-balance">Work.</h1>
            <p className="font-light opacity-70 mt-2.5">
              We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
              Our recent work reflects our commitment to helping clients achieve their goals.
            </p>
          </div>

          <div className="underline uppercase mt-6 font-semibold tracking-wide">
            <a href="">View all</a>
          </div>

          <div>
            <ButtonSendLink />
          </div>

        </div>
      </div>

    </div>
  )
}