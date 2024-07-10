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
  const isNavbarExamples = location.url.pathname.includes('navbar')

  return (
    <FlowbiteProvider theme={themeAndRtl.value.theme} toastPosition={toastPosition.value}>
      <div class={!isNavbarExamples && 'p-5'} dir={themeAndRtl.value.rtl}>
        <Slot />
      </div>
    </FlowbiteProvider>
  )
})

export function staticGenerateHandler() {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}

export const head = () => ({
  meta: [{ name: 'robots', content: 'none' }],
})
