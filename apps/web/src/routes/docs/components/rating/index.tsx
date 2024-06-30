import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="rating">
      <div q:slot="description">
        <p>
          Get started with the rating component from Flowbite Qwik to show testimonials and user reviews of your products using stars, labels and
          advanced layouts
        </p>
        <Hr />
        <p>
          The rating component can be used to show user reviews and testimonials in the form of stars, reviews, and labels based on multiple styles
          and layouts built with Qwik and Tailwind CSS.
        </p>
        <p>
          Check out the rating components from Flowbite Qwik and choose one that suits your needs and customize them using the custom props API and
          the utility classes from Tailwind CSS.
        </p>
        <p>Start using the rating component by importing it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Rating } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Rating - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes',
    },
  ],
})
