import LogoMarquee from "@/components/animations/logo-marquee";

export default function Page() {
  return (
    <div className="flex items-center justify-center py-44">

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-col">
          <div className="rounded-b-2xl bg-white p-4 shadow outline outline-neutral-200 dark:bg-neutral-900 dark:outline-neutral-800">
            <div className="flex min-h-56 items-center justify-center">
              <LogoMarquee />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="text-sm text-gray-400 dark:text-neutral-500">
              Footer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

