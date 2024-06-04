/**
 * title: Disabled state
 * description: Apply the disabled attribute to disallow the users from making any further selections.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'

export default component$(() => {
  const checkedToggleValue = useSignal(true)
  const toggleValue = useSignal(false)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Disabled toggle" disabled bind:checked={toggleValue} />
      <Toggle label="Disabled checked" disabled bind:checked={checkedToggleValue} />
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
