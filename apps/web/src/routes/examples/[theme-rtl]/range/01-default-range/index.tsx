/**
 * title: Range slider example
 * description: Get started with this default example with values from 1 to 100 and the default value of 50.
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Range } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const value = useSignal('50')

  return (
    <>
      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Range ({value.value})
      </label>
      <Range id="default-range" bind:value={value} />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
