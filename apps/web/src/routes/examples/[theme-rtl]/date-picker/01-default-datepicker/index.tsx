/**
 * title: Default Datepicker
 * description: Use this example to show a simple datepicker component.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { DatePicker } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const date = useSignal<Date>()

  return (
    <>
      <p class="mb-2">Reactive date : {date.value?.toDateString()}</p>
      <DatePicker
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
