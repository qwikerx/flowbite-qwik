/**
 * title: Default Timepicker
 * description: Use this example to show a simple timepicker component.
 * height: 120
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { TimePicker } from 'flowbite-qwik'

export default component$(() => {
  const time = useSignal<string>()

  return (
    <>
      <p class="mb-2">Reactive time : {time.value}</p>
      <div class="w-[110px]">
        <TimePicker bind:value={time} />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
