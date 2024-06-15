import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="input">
      <div q:slot="description">
        The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on
        multiple input types, such as text, email, number, password, URL, phone number, and more.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Input - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types',
    },
  ],
})
