/**
 * title: Card horizontal
 * description: Use the horizontal prop to show the card in a horizontal layout.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Card, Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Card
      class="max-w-sm"
      imgSrc="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/js3joe8z5dubh8cjqvcq.jpg"
      horizontal
    >
      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
