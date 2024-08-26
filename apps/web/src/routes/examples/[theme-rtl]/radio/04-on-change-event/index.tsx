/**
 * title: On change event
 * description: This example can be used for the onchange event of the radio component.
 * height: 200
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Radio } from 'flowbite-qwik'

export default component$(() => {
  const pick = useSignal('')

  return (
    <div class="flex flex-col gap-3">
      Reactivity choice : {pick.value}
      <div class="flex flex-col gap-3">
        <Radio
          onChange$={(checked: boolean, value: string) => {
            alert(`Checkbox state changed to ${checked} with value ${value}`)
          }}
          name="radio"
          value="one"
          bind:option={pick}
        >
          First option
        </Radio>
        <Radio
          onChange$={(checked: boolean, value: string) => {
            alert(`Checkbox state changed to ${checked} with value ${value}`)
          }}
          name="radio"
          value="two"
          bind:option={pick}
        >
          Second option
        </Radio>
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
