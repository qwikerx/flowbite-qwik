import { component$ } from '@builder.io/qwik'
import { useToast } from './composables/use-toast'
import { Toast } from './Toast'
import { ToastPosition } from './toast-type'

type ToastListProps = {
  position?: ToastPosition
}

export const ToastList = component$<ToastListProps>(({ position = 'top-right' }) => {
  const { list, remove } = useToast()

  return (
    <>
      {list.value.length > 0 && (
        <ul
          class={[
            'fixed z-[60] flex flex-col space-y-2',
            {
              'left-4 top-4': position === 'top-left',
              'right-4 top-4': position === 'top-right',
              'bottom-4 left-4': position === 'bottom-left',
              'bottom-4 right-4': position === 'bottom-right',
            },
          ]}
        >
          {list.value.map((toast) => {
            return (
              <li
                key={toast.id}
                class={{
                  'animate-from-left': position === 'top-left' || position === 'bottom-left',
                  'animate-from-right': position === 'top-right' || position === 'bottom-right',
                }}
              >
                <Toast {...toast} onClose$={(id: string) => remove(id)}>
                  {toast.text}
                </Toast>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
})
