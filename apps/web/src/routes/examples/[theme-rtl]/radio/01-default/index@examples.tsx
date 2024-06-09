/**
 * title: Default
 * description: Use the default example of a radio component with the checked and unchecked state.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Radio } from 'flowbite-qwik'

export default component$(() => {
  const pick = useSignal<string>('')

  return (
    <>
      <div class="p-3 flex flex-col gap-3">
        <Radio name="radio" value="one" bind:option={pick}>
          First option
        </Radio>
        <Radio name="radio" value="two" bind:option={pick}>
          Second option
        </Radio>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
