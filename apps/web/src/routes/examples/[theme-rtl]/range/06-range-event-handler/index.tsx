/**
 * title: Event handler
 * description: Use the onClick$ native handler to capture an event when range slider has changed value
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Range } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const value = useSignal('5')

  return (
    <>
      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Range ({value.value})
      </label>
      <Range
        onChange$={() => {
          alert('changed !')
        }}
        id="default-range"
        bind:value={value}
      />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
