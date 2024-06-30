/**
 * title: Custom theme
 * description: Use the theme attribute to customize the range component as you want : root/input
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
      <Range id="default-range" size="lg" bind:value={value} theme={{ input: 'rounded-none bg-orange-200 dark:bg-orange-700' }} />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
