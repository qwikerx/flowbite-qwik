import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="alert">
      <div q:slot="description">
        <p>
          Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on
          Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          The alert component can be used to show a contextual text to the user such as a success or error message after form validation inside an
          alert box where you can choose from multiple colors, sizes, and styles.
        </p>
        <p>
          The examples below are styled with Tailwind CSS and the reactivity is handled by Qwik and you can also add any type of content inside the
          alert box.
        </p>
        <p>To start using the alert box you need to import it from the flowbite-qwik package :</p>
        <CodeBlock minimalist content='import { Alert } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Alert - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on Qwik and Tailwind CSS',
    },
  ],
})
