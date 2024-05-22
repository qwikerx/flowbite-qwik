import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik'
import { toastContext } from '../toast-list/useToast'
import { ToastList } from '../toast-list/toast-list'
import { ToastPosition } from '../toast-list/type'

type FlowbiteProviderProps = {
  toastPosition?: ToastPosition
}

export const FlowbiteProvider = component$<FlowbiteProviderProps>(({ toastPosition }) => {
  useContextProvider(toastContext, useStore([]))

  return (
    <>
      <ToastList position={toastPosition} />

      <Slot />
    </>
  )
})
