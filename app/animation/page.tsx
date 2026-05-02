import {BouncingBall} from "@/components/animations/bouncing-ball";
import {PageHeader} from "@/components/page-header";

export default function Page() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="">
        <PageHeader />

        <div className="text-center mb-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Transitions
          </h3>
          <p className="text-md text-muted-foreground leading-7">
            Collection of the most essential transitions for web apps that
            you can just copy and paste into any project.
          </p>
        </div>

        <div>
          <div className="bg-white rounded-4xl outline outline-gray-200/50 p-3.5 space-y-4">
            <div className="p-4 rounded-2xl min-h-40 bg-gray-100 outline outline-gray-200">
              <BouncingBall />
            </div>
            <div className="px-1.5">
              <h5 className="text-lg font-semibold">Bouncing Animation</h5>
              <p className="text-muted-foreground">
                It uses CSS animation with variable distance and duration.
              </p>
            </div>
          </div>
        </div>


        <div className="mt-8 grid grid-cols-1 gap-4 justify-items-start">

        </div>
      </div>
    </div>
  )
}