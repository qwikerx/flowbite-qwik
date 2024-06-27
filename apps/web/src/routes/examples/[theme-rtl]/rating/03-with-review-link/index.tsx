/**
 * title: Rating with review link
 * description: Aggregate more results by using this example to show the amount of reviews and the average score.
 */

import { component$ } from '@builder.io/qwik'
import { Rating } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3">
      <Rating rating={4} reviewLink={{ href: '#', text: '73 reviews' }} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
