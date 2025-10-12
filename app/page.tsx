import FloatingMenu from "@/app/floating-menu";

export default function Page() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col">

      <section className="bg-white mx-auto max-w-xl flex-grow">
        <div className="pt-28 w-full">
          <header className="w-full flex flex-col items-center justify-center">
            <svg viewBox="0 0 70 88" className="w-20" aria-hidden="true">
              <path
                d="m23,63.5c2.9-1.9,6-3.8,9.5-4.2s7.5,1.2,8.6,4.5c1.5,4.2-2.2,8.4-5.8,11-3.4,2.5-7.1,4.6-11.2,5.6-4.1,1-8.6.7-12.3-1.3-4.3-2.4-6.9-7-7.9-11.8s-.4-9.7.4-14.5C7.4,36,14.5,19.7,26.2,7.3c2.5-2.7,6.1-5.4,9.6-4,3.4,1.4,4.2,5.8,4.1,9.5-.3,11.3-3.3,22.4-8.7,32.3-.7,1.2-1.4,2.5-2.6,3.3s-2.8,1.1-4,.4c-2.2-1.4-1.3-4.9.3-7,3.4-4.8,8.2-8.4,13.8-10.4,3.9-1.4,8.6-1.7,11.7.9,2.4,2.1,3.2,5.5,2.7,8.6s-2.2,5.9-4.1,8.4c-1.4,1.8-3.7,3.6-5.6,2.4-2.2-1.3-1.1-4.7.4-6.8,2.7-4,6.3-8.2,11.1-8.8,5.2-.6,10.1,3.3,11.8,8.2s.7,10.3-1.5,15c-4,8.9-12,15.9-21.4,18.7"
                fill="none" stroke="currentColor" strokeWidth="3" className="AnimatedLogo_animated__zbEyH"></path>
            </svg>

            <h2 className="text-xl  text-gray-900 mt-6">
              しずかなインターネット
            </h2>
          </header>

          <div className="rounded-3xl border border-gray-200 p-7 sm:flex sm:p-8">
            <div>sdf</div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://static.sizu.me/images/illust/sl-find-a-way.svg" alt="" className="w-32 xs:w-36" />
            </div>
          </div>

          <p>
            Use flex-utilities like flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size:
          </p>

        </div>
      </section>


      <footer className="bg-gray-100/50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex justify-between items-center">

            <div className="flex space-x-2.5 items-center">
              <svg viewBox="0 0 70 88" className="w-8 text-gray-600" aria-hidden="true">
                <path
                  d="m23,63.5c2.9-1.9,6-3.8,9.5-4.2s7.5,1.2,8.6,4.5c1.5,4.2-2.2,8.4-5.8,11-3.4,2.5-7.1,4.6-11.2,5.6-4.1,1-8.6.7-12.3-1.3-4.3-2.4-6.9-7-7.9-11.8s-.4-9.7.4-14.5C7.4,36,14.5,19.7,26.2,7.3c2.5-2.7,6.1-5.4,9.6-4,3.4,1.4,4.2,5.8,4.1,9.5-.3,11.3-3.3,22.4-8.7,32.3-.7,1.2-1.4,2.5-2.6,3.3s-2.8,1.1-4,.4c-2.2-1.4-1.3-4.9.3-7,3.4-4.8,8.2-8.4,13.8-10.4,3.9-1.4,8.6-1.7,11.7.9,2.4,2.1,3.2,5.5,2.7,8.6s-2.2,5.9-4.1,8.4c-1.4,1.8-3.7,3.6-5.6,2.4-2.2-1.3-1.1-4.7.4-6.8,2.7-4,6.3-8.2,11.1-8.8,5.2-.6,10.1,3.3,11.8,8.2s.7,10.3-1.5,15c-4,8.9-12,15.9-21.4,18.7"
                  fill="none" stroke="currentColor" strokeWidth="3" className="AnimatedLogo_animated__zbEyH"></path>
              </svg>
              <p className="text-sm/6 text-balance text-gray-600">Making the world a better place</p>
            </div>

            <div>
              <div className="flex gap-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <span className="sr-only">X</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
                    <path
                      d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <span className="sr-only">GitHub</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
                    <path
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd" fillRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>


          </div>
        </div>
      </footer>


      <FloatingMenu/>


    </div>
  )
}