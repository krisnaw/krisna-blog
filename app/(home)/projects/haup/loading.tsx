import { Skeleton } from "@/components/ui/skeleton"
import {unstable_ViewTransition as ViewTransition} from 'react'

export default function Loading() {
  return (
    <ViewTransition>
      <div className="max-w-5xl m-auto">
        {/* Skeleton for the title */}
        <div className="mb-4">
          <Skeleton className="h-10 w-20" />
        </div>

        {/* Skeleton for the project summary */}
        <div className="mb-6">
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        {/* Skeleton for the core functionalities */}
        <div className="mb-6">
          <Skeleton className="h-6 w-full max-w-xl mb-2" />
          <Skeleton className="h-6 w-full max-w-lg mb-2" />
          <Skeleton className="h-6 w-full max-w-md" />
        </div>

        {/* Skeleton for the role description */}
        <div className="mb-6">
          <Skeleton className="h-6 w-full max-w-2xl mb-2" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>

        {/* Skeleton for technologies used */}
        <div className="mb-6">
          <Skeleton className="h-6 w-40 mb-2" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-28" />
          </div>
        </div>

        {/* Skeleton for links */}
        <div className="mb-6">
          <Skeleton className="h-6 w-full max-w-sm mb-2" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}
