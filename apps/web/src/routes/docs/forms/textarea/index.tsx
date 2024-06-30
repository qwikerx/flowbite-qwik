import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="textarea">
      <div q:slot="description">
        Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants
        <Hr />
        <p>
          The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a
          comment box, description field, and more.
        </p>
        <p>To use the range component, you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Textarea } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Textarea - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants',
    },
  ],
})
