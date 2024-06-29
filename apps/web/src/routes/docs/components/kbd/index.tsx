import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="kbd">
      <div q:slot="description">
        <p>
          Use the KBD component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components
        </p>
        <Hr />
        <p>
          The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables,
          cards, and more.
        </p>
        <p>Use the semantic &lt;Kbd&gt; keyboard input tag to use the default monospace font which is best suited for representing input keys.</p>
        <p>To start using the Kbd component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Kbd } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik KBD - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the KBD component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components',
    },
  ],
})
