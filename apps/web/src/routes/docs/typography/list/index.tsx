import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'

export default component$(() => {
  return (
    <ComponentDocPage name="list">
      <div q:slot="description">
        Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS
        and Flowbite
        <Hr />
        Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and
        other styles and layouts to show a list of items inside an article or throughout your web page.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik List - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite',
    },
  ],
})
