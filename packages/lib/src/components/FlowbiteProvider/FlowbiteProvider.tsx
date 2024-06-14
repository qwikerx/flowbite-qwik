import { Slot, component$, useContextProvider, useSignal, useStore } from '@builder.io/qwik'
import { toastContext } from '../ToastList/composables/use-toast'
import { ToastList } from '../ToastList/ToastList'
import { ToastPosition } from '~/components/ToastList'
import { darkModeContext } from '~/composables/use-dark'
import { FlowbiteTheme } from '../FlowbiteThemable/composables/use-flowbite-themable'
import { FlowbiteThemable } from '../FlowbiteThemable/FlowbiteThemable'
import { sidebarContext } from '../Sidebar/composables/use-open-sidebar'

type FlowbiteProviderProps = {
  toastPosition?: ToastPosition
  theme?: FlowbiteTheme
}

export const FlowbiteProvider = component$<FlowbiteProviderProps>(({ toastPosition, theme }) => {
  useContextProvider(toastContext, useStore([]))
  useContextProvider(darkModeContext, useSignal(undefined))
  useContextProvider(sidebarContext, useStore({ isOpen: false }))

  return (
    <FlowbiteThemable theme={theme}>
      <ToastList position={toastPosition} />
      <Slot />
    </FlowbiteThemable>
  )
})
