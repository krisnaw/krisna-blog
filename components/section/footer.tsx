import {HomeIcon} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-300">
          <div className="max-w-7xl mx-auto border-l border-r border-gray-300">
            <div className="grid grid-cols-2">

              <h5 className="text-3xl font-light text-gray-700 border-r border-gray-300 flex items-center px-4 sm:px-6 lg:px-8">
                Built by Krisna Wijaya
              </h5>

              <div className="grid grid-cols-4 divide-x divide-gray-300">
                <div className="py-3.5 px-4 flex items-center justify-center">
                  <HomeIcon size={40} />
                </div>

                <div className="py-3.5 px-4 flex items-center justify-center">
                  <HomeIcon size={40} />
                </div>

                <div className="py-3.5 px-4 flex items-center justify-center">
                  <HomeIcon size={40} />
                </div>

                <div className="py-3.5 px-4 flex items-center justify-center">
                  <HomeIcon size={40} />
                </div>
              </div>

            </div>
          </div>
        </footer>
    )
}
