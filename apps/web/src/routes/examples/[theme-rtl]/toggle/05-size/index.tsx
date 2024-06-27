/**
 * title: Sizes
 * description: You can customize the toggle component with different sizes.
 * height: 100
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const checkedToggleValue = useSignal(true)

  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Toggle label="Small" size="sm" bind:checked={checkedToggleValue} />
      <Toggle label="Medium" size="md" bind:checked={checkedToggleValue} />
      <Toggle label="Large" size="lg" bind:checked={checkedToggleValue} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
