/**
 * title: With link
 * description: Use this example if you want to add an anchor link inside the label of the checkbox component.
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
        <Checkbox bind:checked={val}>
          <a href="#" class="text-blue-500 underline">
            I agree with terms and conditions.
          </a>
        </Checkbox>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
