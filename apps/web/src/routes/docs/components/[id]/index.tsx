import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  const location = useLocation()

  return <ComponentDocPage name={location.params.id} />
})
