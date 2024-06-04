import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { FlowbiteProvider, FlowbiteTheme } from 'flowbite-qwik'

export default component$(() => {
  const location = useLocation()
  const themeAndRtl = useComputed$(() => {
    const [theme, rtl] = location.params['theme-rtl'].split('-')
    return {
      theme: theme as FlowbiteTheme | undefined,
      rtl: rtl,
    }
  })

  return (
    <FlowbiteProvider theme={themeAndRtl.value.theme}>
      <div dir={themeAndRtl.value.rtl}>
        <Slot />
      </div>
    </FlowbiteProvider>
  )
})
