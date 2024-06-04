/**
 * title: Checked Toggle
 * description: Apply the checked attribute to the toggle component to activate the selection by default.
 */
import { component$, useSignal } from '@builder.io/qwik'
import { Toggle } from 'flowbite-qwik'

export default component$(() => {
  const checkedToggleValue = useSignal(true)

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Toggle label="Toggle me" bind:checked={checkedToggleValue} />
    </div>
  )
})
