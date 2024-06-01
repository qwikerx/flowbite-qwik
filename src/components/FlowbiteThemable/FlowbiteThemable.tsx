import { Slot, component$, useContextProvider, useSignal } from '@builder.io/qwik'
import { FlowbiteTheme, themeContext } from './composables/use-flowbite-themable'

type FlowbiteChildeProps = {
  theme?: FlowbiteTheme
}

export const FlowbiteThemable = component$<FlowbiteChildeProps>(({ theme = 'blue' }) => {
  useContextProvider(themeContext, useSignal(theme))

  return <Slot />
})
