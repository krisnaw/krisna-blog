import {BouncingBall} from "@/components/animations/bouncing-ball";
import {PageHeader} from "@/components/page-header";

export default function Page() {
  return (
    <div className="max-w-xl mx-auto ">
      <div className="">
        <PageHeader />
        <div className="grid grid-cols-1 gap-4 justify-items-start">
          <BouncingBall />
        </div>
      </div>
    </div>
  )
}