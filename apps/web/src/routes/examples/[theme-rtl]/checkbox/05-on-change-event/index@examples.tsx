/**
 * title: On change event
 * description: This example can be used for the onchange event of the checkbox component.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Checkbox } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal(false)

  return (
    <>
      <div class="p-3">
        <Checkbox
          bind:checked={val}
          onChange$={(val: boolean) => {
            alert(`Checkbox state changed to ${val}`)
          }}
        >
          Change state
        </Checkbox>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
