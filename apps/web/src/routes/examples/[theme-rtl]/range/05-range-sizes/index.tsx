/**
 * title: Sizes
 * description: Apply the small, default, and large sizes for the range component by applying the size attribute
 * height: 300
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Range } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const smallValue = useSignal('5')
  const mediumValue = useSignal('75')
  const largeValue = useSignal('30')

  return (
    <>
      <label for="small-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Small range ({smallValue.value})
      </label>
      <Range id="small-range" size="sm" bind:value={smallValue} class="mb-6" />

      <label for="medium-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Default range ({mediumValue.value})
      </label>
      <Range id="medium-range" size="md" bind:value={mediumValue} class="mb-6" />

      <label for="large-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Large range ({largeValue.value})
      </label>
      <Range id="large-range" size="lg" bind:value={largeValue} class="mb-6" />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
