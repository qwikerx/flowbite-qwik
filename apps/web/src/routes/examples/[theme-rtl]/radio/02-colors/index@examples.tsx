/**
 * title: Color
 * description: This example can be used for the color of the radio component by applying the color attribute to the input element.
 * height: 300
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Heading, Radio } from 'flowbite-qwik'

export default component$(() => {
  const pick = useSignal<string>('blue')

  return (
    <>
      <Heading tag="h5">Picked color : {pick.value}</Heading>
      <div class="p-3 flex flex-col gap-3">
        <Radio name="radio" value="blue" bind:option={pick}>
          Blue
        </Radio>
        <Radio name="radio" value="purple" color="purple" bind:option={pick}>
          Purple
        </Radio>
        <Radio name="radio" value="red" color="red" bind:option={pick}>
          Red
        </Radio>
        <Radio name="radio" value="green" color="green" bind:option={pick}>
          Green
        </Radio>
        <Radio name="radio" value="pink" color="pink" bind:option={pick}>
          Pink
        </Radio>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
