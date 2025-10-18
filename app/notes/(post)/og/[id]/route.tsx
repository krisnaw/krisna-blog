export const revalidate = 300;
import {ImageResponse} from "next/og";

export async function GET() {
  console.log("OG IMAGE")
  return new ImageResponse(
    <div>
      This is og image
    </div>
  );
}
