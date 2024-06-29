import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="list-group">
      <div q:slot="description">
        <p>Use the list group component to display a series of items, buttons or links inside a single element</p>
        <Hr />
        <p>
          The list group component can be used to show a list of items inside of an unordered list for website navigation, show a list of items inside
          of a card, and more.
        </p>
        <p>
          You can choose from one of the examples below based on various styles and options and you can customize the component with Qwik props and
          the classes from Tailwind CSS.
        </p>
        <p>Start using the list group component by first importing it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { ListGroup } from "flowbite-qwik"' language="tsx" />
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
