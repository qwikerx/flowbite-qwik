import { component$ } from '@builder.io/qwik'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="hr">
      <div q:slot="description">
        Create a horizontal line using the `Hr` component to separate content such as paragraphs, blockquotes, and other elements
        <Hr />
        <p>
          The Hr component can be used to separate content using a horizontal line by adding space between elements based on multiple styles,
          variants, and layouts.
        </p>
        <p> To start using the component make sure that you have imported it from Flowbite Qwik:</p>
        <CodeBlock minimalist content='import { Hr } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Hr - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Create a horizontal line using the HR tag to separate content such as paragraphs, blockquotes, and other elements using the utility classes from Tailwind CSS',
    },
  ],
})
