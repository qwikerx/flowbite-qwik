/**
 * title: Heading mark
 * description: This example can be used to mark one part of the heading text with a solid background for highlighting.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <Heading tag="h1" class="mb-4">
        Regain <mark class="rounded-sm bg-blue-600 px-2 text-white dark:bg-blue-500">control</mark> over your days
      </Heading>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </p>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
