/**
 * title: Timepicker with pattern hh:mm:ss
 * description: Use this example to show a simple timepicker component with pattern hh:mm:ss and default value.
 * height: 120
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { TimePicker } from 'flowbite-qwik'
import { IconClockOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  const chunks = useSignal<string[]>()

  return (
    <div class="flex w-[150px] flex-col gap-3">
      <label>Chunks : {JSON.stringify(chunks.value)}</label>
      <TimePicker
        onTimeChange$={(timeAsString, timeAsChunk) => {
          console.log({ timeAsString, timeAsChunk })
          chunks.value = timeAsChunk
        }}
        suffix={<IconClockOutline class="h-4 w-4" />}
        value="13:30:15"
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
