/**
 * title: Highlighted heading
 * description: Use this example to highlight a certain portion of the heading text with a different color.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Heading, useFlowbiteThemable } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const { textClasses } = useFlowbiteThemable()

  return (
    <>
      <Heading tag="h1" class="mb-4">
        Get back to growth with <span class={textClasses.value}>the world's #1</span> CRM.
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
