/**
 * title: Rating with text
 * description: If you also want to show a text near the stars you can use this example as a reference.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { Rating } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3">
      <Rating rating={4}>
        <p q:slot="besideText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.75 out of 5
        </p>
      </Rating>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
