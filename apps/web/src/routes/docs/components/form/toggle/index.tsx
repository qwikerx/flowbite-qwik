import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="toggle">
      <div q:slot="description">
        The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options
        available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Toggle - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors',
    },
  ],
})
