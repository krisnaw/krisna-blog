import {BouncingBall} from "@/components/animations/bouncing-ball";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto h-screen">

      <div className="h-full outline outline-pink-500">
        <div className="h-full flex justify-center items-center">
          <BouncingBall />
        </div>
      </div>

    </div>
  )
}