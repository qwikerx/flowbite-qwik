/**
 * title: Heading mark
 * description: This example can be used to mark one part of the heading text with a solid background for highlighting.
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
        Regain <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">control</mark> over your days
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
