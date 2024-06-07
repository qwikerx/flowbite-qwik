/**
 * title: Playground
 * description: Use the playground to test different toast positions and types.
 * height: 400
 */
import { component$, useContext } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, ToastPosition, useToast } from 'flowbite-qwik'
import { toastPositionContext } from '~/root'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const toastPosition = useContext(toastPositionContext)

  const { add } = useToast()

  return (
    <div class="flex flex-col p-3 space-y-2">
      <div class="mb-4">
        <label for="position" class="mr-3">
          Position
        </label>
        <select
          onChange$={(v) => {
            toastPosition.value = (v.target as HTMLSelectElement).value as ToastPosition
          }}
          class="dark:bg-gray-800 dark:text-white bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="top-right">top-right</option>
          <option value="top-left">top-left</option>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-right">bottom-right</option>
        </select>
      </div>

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
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
