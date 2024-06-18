/**
 * title: Heading underline
 * description: Get started with this example to underline an important part of the heading component using the offset feature from Tailwind CSS.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <Heading tag="h1" class="mb-4">
        We invest in the <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</span>
      </Heading>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </p>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
