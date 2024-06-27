/**
 * title: Underline
 * description: Use the underline style for the select component as an alternative appearance.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
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
      <div class="flex flex-col gap-3 p-3">
        <Select bind:value={selected} options={countries} underline placeholder="Choose a country" label="Underline" />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
