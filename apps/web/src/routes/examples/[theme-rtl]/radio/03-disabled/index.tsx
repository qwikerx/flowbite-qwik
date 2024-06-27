/**
 * title: Disabled
 * description: This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Radio } from 'flowbite-qwik'

export default component$(() => {
  const pick = useSignal<string>('')

  return (
    <>
      <div class="flex flex-col gap-3 p-3">
        <Radio name="radio" value="one" disabled bind:option={pick}>
          First option
        </Radio>
        <Radio name="radio" value="two" disabled bind:option={pick}>
          Second option
        </Radio>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
