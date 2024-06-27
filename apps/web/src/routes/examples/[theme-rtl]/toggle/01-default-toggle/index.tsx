/**
 * title: Default Toggle
 * description: Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.
 * height: 100
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toggle } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const toggleValue = useSignal(false)

  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Toggle label="Toggle me" bind:checked={toggleValue} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
