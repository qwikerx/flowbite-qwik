import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { Hr } from 'flowbite-qwik'

export default component$(() => {
  return (
    <ComponentDocPage name="accordion">
      <div q:slot="description">
        <p>
          Use the accordion component and its options to expand and collapse the content inside each panel based on state reactivity from Qwik and
          Tailwind CSS
        </p>
        <Hr />
        <p>
          The accordion component from Flowbite Qwik can be used to toggle the visibility of the content of each accordion panel tab by expanding the
          collapsing the trigger element based on multiple examples and styles.
        </p>
        <p>
          The reactivity and state is handled by Qwik and the components is built using the Tailwind CSS framework meaning that you can easily
          customize the styles and colors of the accordion.
        </p>
        <p>To use the accordion component, you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Accordion } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Accordion - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options',
    },
  ],
})
