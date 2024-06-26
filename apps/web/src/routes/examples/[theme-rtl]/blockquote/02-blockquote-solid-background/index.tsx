/**
 * title: Solid background
 * description: This example can be used as an alternative style to the default one by applying a solid background color.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Blockquote } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <>
      <p class="text-gray-500 dark:text-gray-400">
        Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By
        running a usability test, you’ll be able to see how users will interact with your design once it’s live.
      </p>
      <Blockquote class="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect
        choice for your next SaaS application."
      </Blockquote>
      First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on
      Tailwind CSS that you can just copy-paste from the documentation.
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
