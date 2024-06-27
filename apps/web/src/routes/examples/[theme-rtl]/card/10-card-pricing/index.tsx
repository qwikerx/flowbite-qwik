/**
 * title: Pricing card
 * description: Use the pricing card component to show the pricing of your product or service.
 * height: 600
 */

import { component$ } from '@builder.io/qwik'
import { Button, Card, Heading, useFlowbiteThemable } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { IconCheckCircleSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  const { textClasses } = useFlowbiteThemable()

  return (
    <Card class="max-w-sm">
      <Heading tag="h5" class="mb-4">
        Standard plan
      </Heading>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">49</span>
        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul class="my-7 space-y-5">
        <li class="flex space-x-3">
          <IconCheckCircleSolid class={['h-5 w-5', textClasses.value]} />
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
        </li>
        <li class="flex space-x-3">
          <IconCheckCircleSolid class={['h-5 w-5', textClasses.value]} />
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
        </li>
        <li class="flex space-x-3">
          <IconCheckCircleSolid class={['h-5 w-5', textClasses.value]} />
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
        </li>
        <li class="flex space-x-3 line-through decoration-gray-500">
          <IconCheckCircleSolid class={['h-5 w-5', 'text-gray-400 dark:text-gray-500']} />
          <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
        </li>
        <li class="flex space-x-3 line-through decoration-gray-500">
          <IconCheckCircleSolid class={['h-5 w-5', 'text-gray-400 dark:text-gray-500']} />
          <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
        </li>
        <li class="flex space-x-3 line-through decoration-gray-500">
          <IconCheckCircleSolid class={['h-5 w-5', 'text-gray-400 dark:text-gray-500']} />
          <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
        </li>
        <li class="flex space-x-3 line-through decoration-gray-500">
          <IconCheckCircleSolid class={['h-5 w-5', 'text-gray-400 dark:text-gray-500']} />
          <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
        </li>
      </ul>
      <Button>Choose plan</Button>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
