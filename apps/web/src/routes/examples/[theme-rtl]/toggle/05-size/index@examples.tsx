/**
 * title: Sizes
 * description: You can customize the toggle component with different sizes.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'

export default component$(() => {
  const checkedToggleValue = useSignal(true)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Small" size="sm" bind:checked={checkedToggleValue} />
      <Toggle label="Medium" size="md" bind:checked={checkedToggleValue} />
      <Toggle label="Large" size="lg" bind:checked={checkedToggleValue} />
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
