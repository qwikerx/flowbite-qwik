import type { QRL } from '@builder.io/qwik'
import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { Toast as ToastType } from '~/composables/useToast'
import { LuAlertCircle, LuXCircle } from '@qwikest/icons/lucide'

interface ToastProps extends ToastType {
  onClose$: QRL<(id: string) => void>
}

export const Toast = component$<ToastProps>(({ criticism, onClose$, id, message }) => {
  useVisibleTask$(() => {
    if (criticism === 'SUCCESS') {
      setTimeout(() => {
        onClose$(id)
      }, 5000)
    }
  })

  return (
    <div
      class={[
        'grid w-full grid-cols-[1rem_auto_1rem] gap-3 p-3 shadow-md transition duration-500 md:w-[360px] md:rounded',
        {
          'bg-green-300 text-green-800': criticism === 'SUCCESS',
          'bg-red-300 text-red-800': criticism === 'ERROR',
          'bg-orange-300 text-orange-800': criticism === 'WARNING',
        },
      ]}
      role="dialog"
    >
      {criticism === 'SUCCESS' ? <LuAlertCircle /> : <LuAlertCircle />}
      <p>{message}</p>
      <div>
        <button onClick$={() => onClose$(id)}>
          <LuXCircle />
        </button>
      </div>
    </div>
  )
})
