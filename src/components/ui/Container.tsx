import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Container({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-[84rem] px-6 sm:px-10 lg:px-14', className)} {...rest}>
      {children}
    </div>
  )
}
