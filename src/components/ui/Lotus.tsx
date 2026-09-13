import { cn } from '../../lib/cn'

/** Line-drawn lotus, taken from the lotus beneath the "S" in the Sanskriti logo. */
export function LotusMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 2.5c3.6 4.2 5.4 8.6 5.4 12.6 0 4.2-2 7.6-5.4 10.4-3.4-2.8-5.4-6.2-5.4-10.4 0-4 1.8-8.4 5.4-12.6Z" />
      <path d="M22.6 25.2C19.9 20.6 15.6 17.4 10 16.4c.2 5.4 4.8 8.8 12.6 8.8Z" />
      <path d="M25.4 25.2c2.7-4.6 7-7.8 12.6-8.8-.2 5.4-4.8 8.8-12.6 8.8Z" />
      <path d="M21 25.6c-4.6-2.4-10.4-3.4-17-2.4 3.6 2.6 9.6 3.4 17 2.4Z" />
      <path d="M27 25.6c4.6-2.4 10.4-3.4 17-2.4-3.6 2.6-9.6 3.4-17 2.4Z" />
    </svg>
  )
}

/** Hairline — lotus — hairline. Used sparingly as a section divider. Colour via `text-*`. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('flex items-center justify-center gap-5', className)}>
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-current opacity-50" />
      <LotusMark className="h-5 w-9 shrink-0" />
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-current opacity-50" />
    </div>
  )
}
