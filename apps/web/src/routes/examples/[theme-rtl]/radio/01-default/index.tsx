/**
 * title: Default
 * description: Use the default example of a radio component with the checked and unchecked state.
 */

import { component$ } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Radio } from 'flowbite-qwik'

export default component$(() => {
  return (
    <>
      <div class="flex flex-col gap-3 p-3">
        <Radio name="radio" value="one">
          First option
        </Radio>
        <Radio name="radio" value="two">
          Second option
        </Radio>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
