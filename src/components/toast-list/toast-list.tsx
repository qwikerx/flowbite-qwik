import { $, component$, useContext, useTask$ } from '@builder.io/qwik'
import type { ToastEntry } from '~/composables/useToast'
import useToastContext from '~/composables/useToast'
import { Toast } from './toast'

export const ToastList = component$(() => {
  const toastsContext = useContext(useToastContext)

  const add$ = $((toast: ToastEntry) => {
    toastsContext.toasts.push({
      ...toast,
      id: Date.now().toString(),
    })
  })

  useTask$(() => {
    toastsContext.add$ = add$
  })

  const onClose$ = $((id: string) => {
    const toastIndex = toastsContext.toasts.findIndex(
      (toast) => toast.id === id,
    )

    if (toastIndex > -1) toastsContext.toasts.splice(toastIndex, 1)
  })

  return (
    <div class="fixed right-0 top-0 z-50 flex w-full flex-col gap-1 md:right-4 md:top-4 md:w-auto md:gap-3">
      {toastsContext.toasts.map((toast) => (
        <Toast
          {...toast}
          key={toast.id}
          onClose$={onClose$}
        />
      ))}
    </div>
  )
})
