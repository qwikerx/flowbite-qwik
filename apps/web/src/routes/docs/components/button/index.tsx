import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="button">
      <div q:slot="description">
        <p>
          Enable user interaction with the button component to perform actions on your website as links, for payment, form submission, social buttons
          and more based on Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          The button component is a common UI component found on the web that allows users to trigger certain actions on your website such as
          submitting a form, navigating to a new page, or downloading a file.
        </p>
        <p>
          The examples from the Flowbite Qwik library allows you to customise the buttons with different colors, sizes, icons, and more. All examples
          are built with Qwik and Tailwind CSS.
        </p>
        <p>In order to start using the button component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Button } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Button - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows',
    },
  ],
})
