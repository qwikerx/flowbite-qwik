import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik'
import { toastContext } from '../ToastList/composables/use-toast'
import { ToastList } from '../ToastList/ToastList'
import { ToastPosition } from '../ToastList/toast-type'

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
