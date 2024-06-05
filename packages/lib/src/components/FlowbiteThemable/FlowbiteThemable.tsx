import { Slot, component$, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik'
import { FlowbiteTheme, themeContext } from './composables/use-flowbite-themable'

type FlowbiteChildeProps = {
  theme?: FlowbiteTheme
}

export const FlowbiteThemable = component$<FlowbiteChildeProps>(({ theme = 'blue' }) => {
  const internalTheme = useSignal(theme)
  useContextProvider(themeContext, internalTheme)

  useTask$(({ track }) => {
    track(() => theme)
    internalTheme.value = theme
  })

  return <Slot />
})
