import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <ComponentDocPage name="accordion" />
})

export const head: DocumentHead = () => ({
  title: 'Qwik Accordion - Flowbite',
})
