import { $, useComputed$, useContext } from '@builder.io/qwik'
import { createContextId } from '@builder.io/qwik'
import uuid from '~/lib/utils/uuid'
import { ToastType } from '../toast-type'

export const TOAST_CONTEXT = 'FLOWBITE_TOAST_CONTEXT'

export type ToastItem = {
  time?: number // ms
  type: ToastType
  text: string
  closable?: boolean
}

export type ToastItemWithId = ToastItem & {
  id: string
}

export const toastContext = createContextId<ToastItemWithId[]>(TOAST_CONTEXT)

export function useToast() {
  const toasts = useContext(toastContext)

  const add = $((toast: ToastItem) => {
    toasts.push({
      ...toast,
      id: uuid(),
    })
  })

  const remove = $((id: string) => {
    const index = toasts.findIndex((toast) => toast.id === id)

    if (index > -1) {
      toasts.splice(index, 1)
    }
  })

  const pop = $(() => {
    toasts.pop()
  })

  const list = useComputed$(() => toasts)

  return {
    add,
    remove,
    pop,
    list,
  }
}
