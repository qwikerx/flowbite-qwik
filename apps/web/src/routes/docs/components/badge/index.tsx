import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="badge">
      <div q:slot="description">
        <p>
          Get started with the badge component to add labels or counters inside paragraphs, buttons, and inputs based on multiple colors and sizes
          from Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          The badge component can be used to show text, labels, and counters inside a small box or circle element which can be placed inside
          paragraphs, buttons, dropdowns, menu items, and more.
        </p>
        <p>
          You can choose from multiple examples of badges based on the color, size, and icon and even use it as a link component by leveraging the
          properties from Qwik and classes from Tailwind CSS.
        </p>
        <p>To start using the badge component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Badge } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Badge - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data.',
    },
  ],
})
