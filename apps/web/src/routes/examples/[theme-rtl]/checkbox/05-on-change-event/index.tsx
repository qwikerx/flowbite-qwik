/**
 * title: On change event
 * description: This example can be used for the onchange event of the checkbox component.
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Checkbox } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal(false)

  return (
    <div class="flex flex-row gap-6">
      <div class="flex flex-col gap-3">
        With no reactive checked value
        <Checkbox
          value="case1"
          onChange$={(state: boolean, value: string) => {
            alert(`Checkbox state changed to ${state} with value ${value}`)
          }}
        >
          Checkbox
        </Checkbox>
      </div>
      <div class="flex flex-col gap-3">
        With reactive checked value : {String(val.value)}
        <Checkbox
          value="case2"
          bind:checked={val}
          onChange$={(state: boolean, value: string) => {
            alert(`Checkbox state changed to ${state} with value ${value}`)
          }}
        >
          Change state
        </Checkbox>
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
