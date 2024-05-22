import { Slot, component$, useContextProvider, useStore } from '@builder.io/qwik'
import { toastContext } from '../FWBtoastList/useToast'
import { ToastList } from '../FWBtoastList/FWBToastList'
import { ToastPosition } from '../FWBtoastList/type'

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
