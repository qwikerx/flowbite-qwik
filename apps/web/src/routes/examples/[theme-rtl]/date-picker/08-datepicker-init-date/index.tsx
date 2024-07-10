/**
 * title: Init date
 * description: Use this example to show a simple datepicker component with a default date specified for calendar
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { DatePicker } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const date = useSignal<Date>()

  const fiveDaysBefore = new Date()
  fiveDaysBefore.setDate(fiveDaysBefore.getDate() - 5)

  return (
    <>
      <p class="mb-2">Reactive date : {date.value?.toDateString()}</p>
      <DatePicker
        defaultDate={fiveDaysBefore}
        onSelectedDateChanged$={(selectedDate: Date) => {
          date.value = selectedDate
        }}
      />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
