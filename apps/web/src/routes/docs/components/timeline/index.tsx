import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="timeline">
      <div q:slot="description">
        <p>
          Use the timeline component from Flowbite Qwik to display a list of items and events in a chronological order based on multiples styles,
          colors and layouts
        </p>
        <Hr />
        <p>
          The timeline component can be used to show a list of events and items in a chronological order with a vertical or horizontal alignment based
          on multiple examples, styles, layouts, and colors.
        </p>
        <p>
          You can customize the content and options of the timeline component by using the custom Qwik props API from Flowbite Qwik and the utility
          classes from Tailwind CSS for quick style changes.
        </p>
        <p>In order to use the timeline component make sure to import it first from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Timeline } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Timeline - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the timeline component from Flowbite Qwik to display a list of items and events in a chronological order based on multiples styles, colors and layouts',
    },
  ],
})
