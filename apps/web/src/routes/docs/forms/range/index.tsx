import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="range">
      <div q:slot="description">
        Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on
        multiple options
        <Hr />
        <p>
          The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using
          a sliding animation.
        </p>
        <p>To use the range component, you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Range } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Range - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on  multiple options',
    },
  ],
})
