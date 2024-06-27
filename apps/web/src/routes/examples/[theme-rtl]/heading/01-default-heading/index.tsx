/**
 * title: Default heading
 * description: Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.
 * height: 250
 */

import { component$ } from '@builder.io/qwik'
import { Button, Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { IconArrowRightOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <div class="text-center">
      <Heading class="mb-4">We invest in the world’s potential</Heading>
      <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </p>

      <Button href="#" suffix={IconArrowRightOutline}>
        Learn more
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
