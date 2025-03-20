import {ImageResponse} from "next/og";
import {readFileSync} from "fs";
import {join} from "path";

export const revalidate = 60;

// Image
const photoProfile = toArrayBuffer(
    readFileSync(join(process.cwd(), "public/images/profiles.jpg"))
);

export async function GET() {

    return new ImageResponse(
        (
            <div
                tw="flex p-10 h-full w-full bg-white flex-col"
                style={font("Inter 300")}
            >
                <main tw="flex grow pt-4 w-full justify-center items-center">
                    <div tw="flex flex-row">
                        <div tw="flex">
                            { }
                            <img
                                tw="rounded-full h-74"
                                alt="Guillermo Rauch"
                                // @ts-expect-error: Source is a typed array, not a typical string URL or object
                                src={photoProfile}
                            />
                        </div>

                        <div tw="flex flex-col px-10 grow text-[28px] h-70 justify-center">
                            <div tw="text-[64px] mb-7" style={font("Inter 500")}>
                                Krisna Wijaya
                            </div>
                            <div tw="flex mb-5" style={font("Roboto Mono 400")}>
                                <span tw="text-gray-400 mr-3">&mdash;</span> Fullstack developer
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}

// lil helper for more succinct styles
function font(fontFamily: string) {
    return { fontFamily };
}

function toArrayBuffer(buffer: Buffer<ArrayBufferLike>) {
    return buffer.buffer.slice(
        buffer.byteOffset,
        buffer.byteOffset + buffer.byteLength
    );
}