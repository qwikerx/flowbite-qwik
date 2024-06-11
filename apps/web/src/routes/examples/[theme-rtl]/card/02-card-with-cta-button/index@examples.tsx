/**
 * title: Card with CTA button
 * description: By also importing the <Button> component you can add it inside the card to show a call-to-action button.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Button, Card } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { IconArrowRightOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <Card class="max-w-sm">
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button suffix={IconArrowRightOutline}>Read more</Button>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
