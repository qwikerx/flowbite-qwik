/**
 * title: Disabled state
 * description: Apply the disabled attribute to disallow the users from making any further selections.
 * height: 100
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

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
  return staticGenerateHandler()
}
