/**
 * title: Alignment
 * description: Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.
 * height: 300
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Blockquote, Select } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const selected = useSignal('text-left')
  const alignments = [
    { value: 'text-left', name: 'Left (default)' },
    { value: 'text-center', name: 'Center' },
    { value: 'text-right', name: 'Right' },
  ]

  return (
    <div class="flex flex-col gap-5">
      <Select bind:value={selected} options={alignments} label="Select an alignment" />

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
