import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="list-group">
      <div q:slot="description">
        The list group component can be used to show a list of items inside of an unordered list for website navigation, show a list of items inside
        of a card, and more. You can choose from one of the examples below based on various styles and options and you can customize the component
        with Qwik props and the classes from Tailwind CSS.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik ListGroup - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the list group component to display a series of items, buttons or links inside a single element',
    },
  ],
})
