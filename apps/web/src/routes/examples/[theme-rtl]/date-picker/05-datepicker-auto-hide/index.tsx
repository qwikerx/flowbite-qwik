/**
 * title: Auto hide
 * description: By setting the autoHide prop you can either enable or disable automatically hiding the datepicker component when selecting a value.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { DatePicker } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return <DatePicker autoHide={false} />
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
