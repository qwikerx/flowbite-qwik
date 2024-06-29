import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="card">
      <div q:slot="description">
        <p>
          Get started with the card component to show content in a box such as titles, descriptions, and images based on multiple styles and sizes
          built with Qwik
        </p>
        <Hr />
        <p>
          The card component can be used to show a wide variety of content such as previews of blog posts, user profiles, pricing plans, and more.
          Choose from one of the many examples built with Qwik and the utility classes from Tailwind CSS.
        </p>
        <p>To start using the card component you will need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Card } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Card - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use these responsive card components to show data entries and information to your users in multiple forms and contexts.',
    },
  ],
})
