import { component$, useSignal } from '@builder.io/qwik'
import { Toggle } from '~/components/Toggle/Toggle'

export default component$(() => {
  const toggleValue = useSignal(false)
  const checkedToggleValue = useSignal(true)

  return (
    <>
      <section id="toggle" class="p-5">
        <div>
          <h2 class="text-2xl font-semibold my-3">Default toggle</h2>
          <div class="flex gap-2">
            <Toggle label="Toggle me" bind:checked={toggleValue} />
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold my-3">Checked toggle</h2>
          <div class="flex gap-2">
            <Toggle label="Toggle me" bind:checked={checkedToggleValue} />
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold my-3">Disabled toggle</h2>
          <div class="flex gap-2">
            <Toggle label="Toggle me" disabled />
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold my-3">Color toggle</h2>
          <div class="flex flex-wrap gap-2">
            <Toggle label="Red" color="red" bind:checked={checkedToggleValue} />
            <Toggle label="Green" color="green" bind:checked={checkedToggleValue} />
            <Toggle label="Yellow" color="yellow" bind:checked={checkedToggleValue} />
            <Toggle label="Orange" color="orange" bind:checked={checkedToggleValue} />
            <Toggle label="Teal" color="teal" bind:checked={checkedToggleValue} />
            <Toggle label="Purple" color="purple" bind:checked={checkedToggleValue} />
          </div>

          <div>
            <h2 class="text-2xl font-semibold my-3">Size toggle</h2>
            <div class="flex flex-wrap gap-2">
              <Toggle label="Small" size="sm" bind:checked={toggleValue} />
              <Toggle label="Medium" size="md" bind:checked={toggleValue} />
              <Toggle label="Large" size="lg" bind:checked={toggleValue} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
})
