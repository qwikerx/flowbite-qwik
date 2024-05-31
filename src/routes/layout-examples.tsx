import { component$, Slot } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

export default component$(() => {
  const location = useLocation()

  return (
    <div dir={location.url.searchParams.has('rtl') ? 'rtl' : undefined}>
      <Slot />
    </div>
  )
})
