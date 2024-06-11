/**
 * title: Card with image
 * description: Add an image to the card by using the imgSrc prop and set the imgAlt prop to add an alt text to the image.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Card } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Card class="max-w-sm" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/image-1.jpg">
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
