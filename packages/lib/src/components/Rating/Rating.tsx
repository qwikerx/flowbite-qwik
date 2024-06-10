import { component$, useComputed$, Slot } from '@builder.io/qwik'
import { RatingSize } from './rating-types'
import { useRatingClasses } from './composables/use-rating-classes'
import { IconStarSolid } from 'flowbite-qwik-icons'

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
        <IconStarSolid key={validStarIndex} class={[sizeClasses.value, 'text-yellow-400']} />
      ))}
      {Array.from({ length: invalidStarNumber.value }).map((_, invalidStarIndex) => (
        <IconStarSolid key={invalidStarIndex} class={[sizeClasses.value, 'text-gray-300 dark:text-gray-500']} />
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
