/**
 * title: Sizing
 * description: The size prop from Qwik can be used on the <ProgressBar> component to set the size of the progress bar. You can choose from sm, md, lg and xl.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ProgressBar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-col gap-2">
      <div class="text-base font-medium dark:text-white">Small</div>
      <ProgressBar progress={45} size="sm" color="dark" />
      <div class="text-base font-medium dark:text-white">Default</div>
      <ProgressBar progress={45} size="md" color="dark" />
      <div class="text-lg font-medium dark:text-white">Large</div>
      <ProgressBar progress={45} size="lg" color="dark" />
      <div class="text-lg font-medium dark:text-white">Extra Large</div>
      <ProgressBar progress={45} size="xl" color="dark" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
