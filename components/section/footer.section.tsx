export default function FooterSection() {
  return (
    <footer className="bg-gray-100 px-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between py-4">

          <div className=" space-x-2.5 items-center hidden sm:block">
            <p className="text-sm/6 text-balance text-gray-600">
              © {new Date().getFullYear()} Krisna Wijaya
            </p>
          </div>

          <div>
            <div className="flex gap-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 p-1.5 bg-neutral-700 rounded-full">
                <span className="sr-only">X</span>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6 text-white">
                  <path
                    d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                </svg>
              </a>

              <a href="#" className="text-gray-600 hover:text-gray-800 p-1.5 bg-neutral-700 rounded-full">
                <span className="sr-only">GitHub</span>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6 text-white">
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
  )
}