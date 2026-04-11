import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Divide } from "lucide-react";

export default function Pretext() {
  return (
    <div className="mx-auto max-w-7xl h-screen">
      <div className="size-full outline outline-pink-500 flex flex-col">
        <h2 className="text-2xl">Rich Text</h2>
        <div>
          <Slider defaultValue={[33]} max={100} step={1} />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}
