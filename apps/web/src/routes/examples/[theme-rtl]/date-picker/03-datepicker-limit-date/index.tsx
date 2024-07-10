/**
 * title: Limit the date
 * description: By using the minDate and maxDate props you can limit the date range that the user can select.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { DatePicker } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return <DatePicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
