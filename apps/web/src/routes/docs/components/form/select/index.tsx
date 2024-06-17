import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="select">
      <div q:slot="description">
        The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by
        browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available
        in dark mode.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Select - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants',
    },
  ],
})
