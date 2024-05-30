import { Slot, component$, useContextProvider, useSignal, useStore } from '@builder.io/qwik'
import { toastContext } from '../ToastList/composables/use-toast'
import { ToastList } from '../ToastList/ToastList'
import { ToastPosition } from '../ToastList/toast-type'
import { darkModeContext } from '~/composables/use-dark'
import { FlowbiteTheme, themeContext } from '../FlowbiteThemable/composables/use-flowbite-themable'
import { FlowbiteThemable } from '../FlowbiteThemable/FlowbiteThemable'

type FlowbiteProviderProps = {
  toastPosition?: ToastPosition
  theme?: FlowbiteTheme
}

export const FlowbiteProvider = component$<FlowbiteProviderProps>(({ toastPosition, theme }) => {
  useContextProvider(toastContext, useStore([]))
  useContextProvider(darkModeContext, useSignal(undefined))
  useContextProvider(themeContext, theme)

  return (
    <FlowbiteThemable theme={theme}>
      <ToastList position={toastPosition} />

      <Slot />
    </FlowbiteThemable>
  )
})
