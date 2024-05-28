import type { RatingSize } from '../rating-types'
import clsx from 'clsx'
import { Signal, useComputed$ } from '@builder.io/qwik'

const ratingSizeClasses: Record<RatingSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-9 h-9',
}

export function useRatingClasses(size: Signal<RatingSize>) {
  const sizeClasses = useComputed$(() => clsx(ratingSizeClasses[size.value] ?? ''))

  return { sizeClasses }
}
