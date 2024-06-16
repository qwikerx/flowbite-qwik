import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="textarea">
      <div q:slot="description">
        The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a
        comment box, description field, and more. From the examples on this page you will find multiple styles and variants of the textarea component
        coded with the utility classes from Tailwind CSS.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Textarea - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants',
    },
  ],
})
