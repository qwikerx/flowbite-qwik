import { component$ } from '@builder.io/qwik'
import { Rating } from '~/components/Rating/Rating'
import { RatingSize } from '~/components/Rating/rating-types'

export default component$(() => {
  return (
    <section id="ratings">
      <div>
        <h2 class="text-2xl font-semibold my-3">Default Rating</h2>
        <Rating rating={4} />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Rating with text</h2>
        <Rating rating={4}>
          <p q:slot="besideText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.75 out of 5
          </p>
        </Rating>
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Rating with review link</h2>
        <Rating rating={4} reviewLink={{ href: '#', text: '73 reviews' }} />
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Rating with size</h2>
        {(['sm', 'md', 'lg'] as RatingSize[]).map((size) => (
          <Rating rating={4} size={size} />
        ))}
      </div>
    </section>
  )
})
