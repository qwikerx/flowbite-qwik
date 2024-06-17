import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="pagination">
      <div q:slot="description">
        The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and
        more. You can use multiple variants of this component with or without icons and even for paginating table data entries.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Pagination - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the Tailwind CSS pagination element to indicate a series of content across various pages based on multiple styles and sizes',
    },
  ],
})
