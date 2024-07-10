/**
 * title: Localization
 * description: Use the language prop to set the language of the datepicker component. The labelTodayButton and labelClearButton can also be used to update the text of the buttons.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { DatePicker } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return <DatePicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
