/**
 * title: Sizes
 * description: Choose from one of the multiple sizes for the default blockquote component based on the surrounding elements and sizes.
 * height: 300
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Blockquote, Select } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const selected = useSignal('text-left')
  const sizes = [
    { value: 'text-lg', name: 'Small (default)' },
    { value: 'text-xl', name: 'Medium' },
    { value: 'text-2xl', name: 'Large' },
  ]

  return (
    <div class="flex flex-col gap-5">
      <Select bind:value={selected} options={sizes} label="Select a size" />

      <Blockquote class={selected.value}>
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect
        choice for your next SaaS application."
      </Blockquote>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
