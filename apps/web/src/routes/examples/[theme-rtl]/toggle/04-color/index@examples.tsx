/**
 * title: Colors
 * description: You can customize the toggle component with different colors.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const checkedToggleValue = useSignal(true)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Red" color="red" bind:checked={checkedToggleValue} />
      <Toggle label="Green" color="green" bind:checked={checkedToggleValue} />
      <Toggle label="Yellow" color="yellow" bind:checked={checkedToggleValue} />
      <Toggle label="Orange" color="orange" bind:checked={checkedToggleValue} />
      <Toggle label="Teal" color="teal" bind:checked={checkedToggleValue} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
