/**
 * title: Disabled state
 * description: This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.
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
        <Checkbox bind:checked={val} disabled>
          Disable
        </Checkbox>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
