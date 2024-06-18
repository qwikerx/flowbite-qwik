/**
 * title: Default card
 * description: Use this example to show a simple card component with a title and description and apply the href tag to the <Card> component to set a hyperlink to the card.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Card, Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Card href="#" class="max-w-sm">
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
