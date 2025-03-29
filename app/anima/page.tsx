import {UploadProfile} from "@/components/upload-widget/upload-profile";
import {UploadFiles} from "@/components/upload-widget/upload-files";
import {UpdateProfile} from "@/components/upload-widget/update-profile";


export default function Page() {
    return (
        <div>
            <main className="p-6 pt-3 md:pt-6 min-h-screen flex flex-col">

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <UpdateProfile />
                    </div>

                    <div>
                        <UploadProfile />
                    </div>

                    <div>
                        <UploadFiles />
                    </div>
                </div>

            </main>
        </div>
    )
}