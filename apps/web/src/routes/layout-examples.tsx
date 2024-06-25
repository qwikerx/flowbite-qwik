import { component$, Slot, useComputed$, useContext } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { FlowbiteProvider } from 'flowbite-qwik'
import type { FlowbiteTheme } from 'flowbite-qwik'
import { toastPositionContext } from '~/root'

export default component$(() => {
  const location = useLocation()
  const themeAndRtl = useComputed$(() => {
    const [theme, rtl] = location.params['theme-rtl'].split('-')
    return {
      theme: theme as FlowbiteTheme | undefined,
      rtl: rtl,
    }
  })
  const toastPosition = useContext(toastPositionContext)

  return (
    <FlowbiteProvider theme={themeAndRtl.value.theme} toastPosition={toastPosition.value}>
      <div dir={themeAndRtl.value.rtl}>
        <Slot />
      </div>
    </FlowbiteProvider>
  )
})
