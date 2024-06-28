/**
 * title: Custom theme card
 * description: Use the theme prop to customize styles of the component
 * height: 600
 */

import { component$ } from '@builder.io/qwik'
import { Card, Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Card
      class="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/mqvec5i4xq0lmxr7yh4k.jpg"
      theme={{ root: 'bg-red-100 dark:bg-orange-800', image: 'opacity-30 dark:opacity-80', content: 'p-2' }}
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
