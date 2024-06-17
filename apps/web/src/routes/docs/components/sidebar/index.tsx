import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="sidebar">
      <div q:slot="description">
        The sidebar component can be used as a complementary element relative to the navbar shown on either the left or right side of the page used
        for the navigation on your web application, including menu items, multi-level menu items, call to actions elements, and more.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Sidebar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the sidebar component to show a list of menu items and multi-level menu items on either side of the page to navigate on your website',
    },
  ],
})
