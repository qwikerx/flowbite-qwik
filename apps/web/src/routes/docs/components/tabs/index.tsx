import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="tabs">
      <div q:slot="description">
        <p>
          Get started with the tabs component from Flowbite Qwik to show a list of tab items where you can switch between them using multiple styles,
          colors and layouts
        </p>
        <Hr />
        <p>
          The tabs component can be used to show a list of tab items that you can click on to change the content inside of the main tabs component
          using Qwik state reactivity.
        </p>
        <p>
          Choose one of the examples below based on various styles, layouts, and content types that you can customize with Qwik components, props and
          the utility classes from Tailwind CSS.
        </p>
        <p>To start using the tabs component make sure you import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Tabs } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Tabs - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container',
    },
  ],
})
