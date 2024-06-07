import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <ComponentDocPage name="jumbotron" />
})

export const head: DocumentHead = () => ({
  title: 'Qwik Jumbotron - Flowbite',
})
