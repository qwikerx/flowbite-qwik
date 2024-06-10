/**
 * title: Sizes
 * description: Get started with the small, default, and large sizes for the select component from the example below.
 * height: 350
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Select } from 'flowbite-qwik'

export default component$(() => {
  const selected = useSignal('')
  const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
  ]

  return (
    <>
      <div class="p-3 flex flex-col gap-3">
        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Small" sizing="sm" />
        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Medium" sizing="md" />
        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Large" sizing="lg" />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
