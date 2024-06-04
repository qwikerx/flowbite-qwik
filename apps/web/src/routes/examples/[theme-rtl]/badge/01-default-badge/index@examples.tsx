/**
 * title: Default Badge
 * description: Use the following badge elements to indicate counts or labels inside or outside components.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge type="default" content="Default" />
      <Badge type="dark" content="Dark" />
      <Badge type="red" content="Red" />
      <Badge type="green" content="Green" />
      <Badge type="yellow" content="Yellow" />
      <Badge type="indigo" content="Indigo" />
      <Badge type="purple" content="Purple" />
      <Badge type="pink" content="Pink" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}
