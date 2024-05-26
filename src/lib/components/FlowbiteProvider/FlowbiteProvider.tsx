import { Slot, component$, useContextProvider, useSignal, useStore } from '@builder.io/qwik'
import { toastContext } from '../ToastList/composables/use-toast'
import { ToastList } from '../ToastList/ToastList'
import { ToastPosition } from '../ToastList/toast-type'
import { darkModeContext } from '~/lib/composables/use-dark'

type FlowbiteProviderProps = {
  toastPosition?: ToastPosition
}

export const FlowbiteProvider = component$<FlowbiteProviderProps>(({ toastPosition }) => {
  useContextProvider(toastContext, useStore([]))
  useContextProvider(darkModeContext, useSignal(undefined))

  return (
    <>
      <ToastList position={toastPosition} />

      <Slot />
    </>
  )
})
