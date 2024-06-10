/**
 * title: Colors
 * description: This example can be used for the color of the checkbox component by applying the color attribute to the input element.
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Checkbox, FlowbiteTheme } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal(true)

  return (
    <>
      <div class="p-3 flex gap-3">
        {(['blue', 'green', 'red', 'pink', 'purple'] as FlowbiteTheme[]).map((color) => (
          <Checkbox bind:checked={val} color={color}>
            {color}
          </Checkbox>
        ))}
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
