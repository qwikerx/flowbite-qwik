import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="spinner">
      <div q:slot="description">
        <p>
          Indicate a loading status when fetching data by using the spinner component built with Qwik and animated with Tailwind CSS based on multiple
          colors and sizes
        </p>
        <Hr />
        <p>
          The spinner component should be used to indicate a loading status of the content that you're fetching from your database and you can choose
          from multiple styles, colors, sizes, and animations based on Qwik and Tailwind CSS.
        </p>
        <p>To start using the spinner component make sure you import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Spinner } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Spinner - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS',
    },
  ],
})
