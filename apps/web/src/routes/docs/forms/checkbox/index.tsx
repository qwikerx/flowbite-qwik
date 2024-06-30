import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="checkbox">
      <div q:slot="description">
        Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple
        sizes and colors
        <Hr />
        <p>
          The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple
          styles, sizes, colors, and variants.
        </p>
        <p>To use the range component, you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Checkbox } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Checkbox - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors',
    },
  ],
})
