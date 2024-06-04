/**
 * title: Default Toggle
 * description: Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'

export default component$(() => {
  const toggleValue = useSignal(false)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Toggle me" bind:checked={toggleValue} />
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
