import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="dropdown">
      <div q:slot="description">
        Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles,
        and placements
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Dropdown - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements',
    },
  ],
})
