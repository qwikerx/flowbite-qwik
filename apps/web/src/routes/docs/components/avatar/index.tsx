import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="avatar">
      <div q:slot="description">
        <p>
          Use the avatar component to show user profile images and placeholders in different sizes, colors and shapes based on Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          The avatar component from Flowbite Qwik can be used to show a visual representation of a user or team account for your application based on
          multiple examples, colors, sizes and shapes.
        </p>
        <p>
          All of the example are built as Qwik components and you can access custom props and methods to customize the component and you can also use
          Tailwind CSS classes to style the component.
        </p>
        <p>To start using the avatar component you need to import it from the flowbite-qwik package :</p>
        <CodeBlock minimalist content='import { Avatar } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Avatar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the avatar component to show user profile images and placeholders in different sizes, colors and shapes based on Qwik and Tailwind CSS',
    },
  ],
})
