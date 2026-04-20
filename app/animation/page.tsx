import {BouncingBall} from "@/components/animations/bouncing-ball";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto ">
      <div className="pt-24">
        <div className="grid grid-cols-1 gap-2 justify-items-start">
          <BouncingBall />
        </div>
      </div>
    </div>
  )
}