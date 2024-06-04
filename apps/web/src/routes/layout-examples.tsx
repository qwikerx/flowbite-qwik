import { component$, Slot } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { FlowbiteProvider, FlowbiteTheme } from 'flowbite-qwik'

export default component$(() => {
  const location = useLocation()

  return (
    <FlowbiteProvider theme={location.url.searchParams.get('theme') as FlowbiteTheme | undefined}>
      <div dir={location.url.searchParams.has('rtl') ? 'rtl' : undefined}>
        <Slot />
      </div>
    </FlowbiteProvider>
  )
})
