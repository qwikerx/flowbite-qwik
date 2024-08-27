/**
 * title: Checked state
 * description: This example can be used for the checked state of the checkbox component.
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Checkbox } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal(true)

  return (
    <div class="flex flex-col gap-3">
      Reactive checked value : {String(val.value)}
      <Checkbox bind:checked={val}>Checked</Checkbox>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
