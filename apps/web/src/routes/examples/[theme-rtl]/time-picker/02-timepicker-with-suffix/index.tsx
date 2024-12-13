/**
 * title: Timepicker with a suffix icon
 * description: Use this example to show a simple timepicker component with suffix and default value.
 * height: 120
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { TimePicker } from 'flowbite-qwik'
import { IconClockOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <div class="w-[110px]">
      <TimePicker
        label="Time picker"
        onTimeChange$={(timeAsString, timeAsChunk) => {
          console.log({ timeAsString, timeAsChunk })
        }}
        suffix={<IconClockOutline class="h-4 w-4" />}
        value="13:30"
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
