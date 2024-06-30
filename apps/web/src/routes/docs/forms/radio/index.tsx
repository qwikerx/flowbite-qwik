import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="radio">
      <div q:slot="description">
        Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple
        styles and colors
        <Hr />
        <p>
          The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility
          classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.
        </p>
        <p>To use the range component, you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Radio } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Radio - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors.',
    },
  ],
})
