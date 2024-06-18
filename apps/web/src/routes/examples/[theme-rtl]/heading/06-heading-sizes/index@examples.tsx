/**
 * title: Sizes
 * description: The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.
 * height: 200
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Heading, HeadingTag, Select } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const selected = useSignal<HeadingTag>('h1')
  const sizes = [
    { value: 'h1', name: 'Heading one (H1 - default)' },
    { value: 'h2', name: 'Heading two (H2)' },
    { value: 'h3', name: 'Heading three (H3)' },
    { value: 'h4', name: 'Heading four (H4)' },
    { value: 'h5', name: 'Heading five (H5)' },
    { value: 'h6', name: 'Heading fix (H6)' },
  ]

  return (
    <>
      <Select bind:value={selected} options={sizes} label="Select a size" />

      <Heading tag={selected.value} class="mt-4">
        We invest in the world’s potential
      </Heading>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
