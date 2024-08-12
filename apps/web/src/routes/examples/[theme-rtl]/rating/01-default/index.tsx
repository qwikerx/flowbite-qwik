/**
 * title: Default rating
 * description: Use this simple example of a star rating component for showing review results.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { Rating } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3">
      <Rating rating={4} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
