/**
 * title: Playground
 * description: Use the playground to test different toast positions and types.
 * height: 400
 */
import { component$, useContext, useSignal } from '@builder.io/qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Select, ToastPosition, useToast } from 'flowbite-qwik'
import { toastPositionContext } from '~/root'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const toastPosition = useContext(toastPositionContext)

  const selected = useSignal('top-right')
  const positions = [
    { value: 'top-right', name: 'top-right' },
    { value: 'top-left', name: 'top-left' },
    { value: 'bottom-left', name: 'bottom-left' },
    { value: 'bottom-right', name: 'bottom-right' },
  ]

  const { add } = useToast()

  return (
    <div class="flex flex-col p-3 space-y-2">
      <Select
        bind:value={selected}
        options={positions}
        label="Select an position"
        onChange$={() => {
          toastPosition.value = selected.value as ToastPosition
        }}
      />

      <div class="flex gap-3">
        <Button
          onClick$={() =>
            add({
              type: 'success',
              text: 'This is a success toast',
              closable: true,
            })
          }
        >
          Add success toast from
        </Button>
        <Button
          onClick$={() =>
            add({
              type: 'danger',
              text: 'This is a danger toast',
              closable: true,
              time: 2000,
            })
          }
        >
          Add danger toast with autoclose timer
        </Button>
      </div>
      <Link href="/docs/getting-started/quickstart" class="text-blue-500 underline">
        The toast position should be defined in the FlowbiteProvider
      </Link>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
