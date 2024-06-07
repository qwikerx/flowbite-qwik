import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <ComponentDocPage name="rating" />
})

export const head: DocumentHead = () => ({
  title: 'Qwik Rating - Flowbite',
})
