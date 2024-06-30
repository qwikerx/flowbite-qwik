import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="tooltip">
      <div q:slot="description">
        <p>
          Use the tooltip component to show a descriptive text when hovering over an element such as a button and customize the content and style with
          Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          Use the tooltip component from Flowbite Qwik to indicate helpful information when hovering over an element such as a button or link to
          improve the UI/UX of your website.
        </p>
        <p>
          Choose from multiple options, layouts, styles, colors, and animations from the examples below and customize the content and options using
          the custom Qwik API props and the utility classes from Tailwind CSS.
        </p>
        <p>To start using the tooltip component make sure you import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Tooltip } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Tooltip - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element',
    },
  ],
})
