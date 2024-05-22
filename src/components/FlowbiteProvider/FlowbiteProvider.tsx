import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik'
import { toastContext } from '../FWBToastList/useToast'
import { ToastList } from '../FWBToastList/ToastList'
import { ToastPosition } from '../FWBToastList/type'

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
