import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="jumbotron">
      <div q:slot="description">
        <p>
          Use the jumbotron component to show a marketing message to your users based on a headline and image inside of a card box based on Tailwind
          CSS
        </p>
        <Hr />
        <p>
          The Jumbotron (hero) component can be used as the first section of your website with a focus on a marketing message to increase the
          likelihood of the user to continue browsing your website.
        </p>
        <p>
          This UI component features a heading title, a short description, an optional CTA button, background image, gradient or solid background
          color and it’s generally inside of a card element.
        </p>
        <p>
          The jumbotron component from Flowbite Qwik is responsive on all devices, natively supports dark mode and is coded with the utility classes
          from Tailwind CSS.
        </p>
        <p>To start using the jumbotron component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Jumbotron } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Jumbotron - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the jumbotron component to show a marketing message to your users based on a headline and image inside of a card box based on Tailwind CSS',
    },
  ],
})
