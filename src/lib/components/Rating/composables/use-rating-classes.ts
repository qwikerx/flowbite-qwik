import type { RatingSize } from '../rating-types'
import clsx from 'clsx'
import { Signal, useComputed$ } from '@builder.io/qwik'

const ratingSizeClasses: Record<RatingSize, string> = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-10 h-10',
}

export function useRatingClasses(size: Signal<RatingSize>) {
  const sizeClasses = useComputed$(() => clsx(ratingSizeClasses[size.value] ?? ''))

  return { sizeClasses }
}
