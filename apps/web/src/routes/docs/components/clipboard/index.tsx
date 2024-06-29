import { component$ } from '@builder.io/qwik'
import { Hr } from 'flowbite-qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="clipboard">
      <div q:slot="description">
        <p>
          Use the clipboard component to copy text, data or lines of code to the clipboard with a single click based on various styles and examples
          coded with Tailwind CSS and Flowbite
        </p>
        <Hr />
        <p>
          The copy to clipboard component allows you to copy text, lines of code, contact details or any other data to the clipboard with a single
          click on a trigger element such as a button. This component can be used to copy text from an input field, textarea, code block or even
          address fields in a form element.
        </p>
        <p>
          These components are built with Tailwind CSS and Flowbite Qwik and can be found on the internet on websites such as Bitly, Cloudflare,
          Amazon AWS and almost all open-source projects and documentations.
        </p>
        <p>Import the component from flowbite-qwik to use the clipboard element :</p>
        <CodeBlock minimalist content='import { Clipboard } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Clipboard - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The copy to clipboard component allows you to copy text, lines of code, contact details or any other data to the clipboard with a single click on a trigger element such as a button',
    },
  ],
})
