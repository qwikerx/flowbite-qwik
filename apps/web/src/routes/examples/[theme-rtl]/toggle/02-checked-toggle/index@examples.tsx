/**
 * title: Checked Toggle
 * description: Apply the checked attribute to the toggle component to activate the selection by default.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'

export default component$(() => {
  const checkedToggleValue = useSignal(true)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Toggle me" bind:checked={checkedToggleValue} />
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
