import { component$, useContext } from '@builder.io/qwik'
import { Toast } from '~/components/FWBToastList/Toast'
import { Button } from '~/components/Button/Button'
import { useToast } from '~/components/FWBToastList/useToast'
import { toastPositionContext } from '~/root'
import { ToastPosition } from '~/components/FWBToastList/type'

export default component$(() => {
  const { add } = useToast()
  const toastPosition = useContext(toastPositionContext)

  return (
    <section id="toasts" class="p-5">
      <h2 class="my-3">Prop - type</h2>
      <div class="flex flex-col space-y-2">
        <Toast id="default">Default</Toast>
        <Toast id="success" type="success">
          Success
        </Toast>
        <Toast id="danger" type="danger">
          Danger
        </Toast>
        <Toast id="warning" type="warning">
          Warning
        </Toast>
      </div>

      <h2 class="my-3">Prop - divide</h2>
      <div class="flex flex-col space-y-2">
        <Toast id="default" divide>
          Default
        </Toast>
        <Toast id="success" divide type="success">
          Success
        </Toast>
        <Toast id="danger" divide type="danger">
          Danger
        </Toast>
        <Toast id="warning" divide type="warning">
          Warning
        </Toast>
      </div>
      <h2 class="my-3">Message</h2>
      <Toast id="card" alignment="start" icon={<img alt="Avatar" class="w-8 h-8 rounded-full shadow-lg" src="https://i.pravatar.cc/300" />}>
        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
        <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
        <Button size="xs" href="#">
          Reply
        </Button>
      </Toast>

      <h2 class="my-3">Test by yourself</h2>

      <div class="mb-4">
        <label for="position" class="mr-3">
          Position
        </label>
        <select
          onChange$={(v) => {
            toastPosition.value = (v.target as HTMLSelectElement).value as ToastPosition
          }}
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
    </section>
  )
})
