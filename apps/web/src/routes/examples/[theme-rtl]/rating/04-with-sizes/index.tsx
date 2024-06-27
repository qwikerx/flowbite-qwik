/**
 * title: Stars sizes
 * description: Check out the different sizing options for the star review component from small, medium, and large.
 */

import { component$ } from '@builder.io/qwik'
import { Rating, RatingSize } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="flex flex-col gap-3 p-3">
      {(['sm', 'md', 'lg'] as RatingSize[]).map((size) => (
        <Rating rating={4} size={size} />
      ))}
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
