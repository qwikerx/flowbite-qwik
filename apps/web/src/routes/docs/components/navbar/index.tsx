import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="navbar">
      <div q:slot="description">
        Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list
        of pages, CTA button, search input, user profile options with a dropdown, and more.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Navbar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns',
    },
  ],
})
