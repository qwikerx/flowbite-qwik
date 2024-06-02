/**
 * title: Default Toggle
 * description: Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { Toggle } from '~/components/Toggle/Toggle'

export default component$(() => {
  const toggleValue = useSignal(false)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Toggle me" bind:checked={toggleValue} />
    </div>
  )
})
