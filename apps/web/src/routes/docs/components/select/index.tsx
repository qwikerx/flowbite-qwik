import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="select">
      <div q:slot="explanation">
        The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by
        browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available
        in dark mode.{' '}
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Select - Flowbite',
})
