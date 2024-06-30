import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="input">
      <div q:slot="description">
        Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants,
        and input types
        <Hr />
        <p>
          The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based
          on multiple input types, such as text, email, number, password, URL, phone number, and more.
        </p>
        <p>
          On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from
          Tailwind CSS and components from Flowbite.
        </p>
        <p>To use the range component, you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Input } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Input - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types',
    },
  ],
})
