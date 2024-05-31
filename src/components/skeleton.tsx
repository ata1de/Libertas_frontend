import React from 'react'
import { Skeleton } from './ui/skeleton'

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
            <Skeleton className="h-[280px] w-[320px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[280px]" />
                <Skeleton className="h-4 w-[240px]" />
            </div>
    </div>
  )
}

export default SkeletonCard