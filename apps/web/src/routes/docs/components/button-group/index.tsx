import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="button-group">
      <div q:slot="description">
        <p>
          Button groups allow you to stack together multiple buttons in a single line horizontally based on multiple styles and sizes using Qwik and
          Tailwind CSS
        </p>
        <Hr />
        <p>
          The button group component from Flowbite Qwik can be used to stack multiple button elements and group them visually together. It can often
          be used to create a navigation menu or a toolbar.
        </p>
        <p>
          Choose from multiple examples and you can update properties such as the color, size, and appearance using the props from Qwik and utility
          classes from Tailwind CSS.
        </p>
        <p>To start using the component you need to import it from the flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Button } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik ButtonGroup - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line',
    },
  ],
})
