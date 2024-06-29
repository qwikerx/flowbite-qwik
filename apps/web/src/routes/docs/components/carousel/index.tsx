import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="carousel">
      <div q:slot="description">
        <p>
          Get started with the carousel component to showcase images and content and slide through them using custom controls, intervals, and
          indicators with Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          Use the responsive carousel component to allow users to slide through multiple items and navigate between them using the control buttons and
          indicators.
        </p>
        <p>
          Choose from multiple examples and options to update the intervals, make the carousel static and set custom control button and indicator by
          configuring Qwik and the utility classes from Tailwind CSS.
        </p>
        <p>To start using the carousel component you first need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Carousel } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Carousel - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options',
    },
  ],
})
