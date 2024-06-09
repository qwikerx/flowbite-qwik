/**
 * title: Selected option
 * description: Use this example to get a single option selection with the selected state of the select input component.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Select } from 'flowbite-qwik'

export default component$(() => {
  const selected = useSignal('fr')
  const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
  ]

  return (
    <>
      <div class="p-3 flex flex-col gap-3">
        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Select an option" />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
