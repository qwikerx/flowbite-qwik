import { component$, useComputed$, Slot } from '@builder.io/qwik'
import { RatingSize } from './rating-types'
import { useRatingClasses } from './composables/use-rating-classes'

type RatingProps = {
  rating?: number
  scale?: number
  size?: RatingSize
  reviewLink?: {
    href: string
    text: string
  }
}

export const Rating = component$<RatingProps>(({ rating = 3, scale = 5, size = 'md', reviewLink }) => {
  const validStarNumber = useComputed$(() => Math.floor(rating))
  const invalidStarNumber = useComputed$(() => scale - validStarNumber.value)

  const { sizeClasses } = useRatingClasses(useComputed$(() => size))

  return (
    <div class="flex items-center">
      {Array.from({ length: validStarNumber.value }).map((_, validStarIndex) => (
        <svg
          key={validStarIndex}
          class={[sizeClasses.value, 'text-yellow-400']}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {Array.from({ length: invalidStarNumber.value }).map((_, invalidStarIndex) => (
        <svg
          key={invalidStarIndex}
          class={[sizeClasses.value, 'text-gray-300 dark:text-gray-500']}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <Slot name="besideText" />
      {Boolean(reviewLink?.href && reviewLink?.text) && (
        <>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
          <a href={reviewLink!.href} class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            {reviewLink!.text}
          </a>
        </>
      )}
    </div>
  )
})
