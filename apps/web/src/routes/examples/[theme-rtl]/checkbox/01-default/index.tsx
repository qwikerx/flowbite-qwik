/**
 * title: Checkbox example
 * description: Use this default example of a checkbox element in a checked and unchecked state.
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Checkbox } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal(false)

  return (
    <>
      <div class="p-3">
        <Checkbox bind:checked={val}>Checkbox</Checkbox>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
