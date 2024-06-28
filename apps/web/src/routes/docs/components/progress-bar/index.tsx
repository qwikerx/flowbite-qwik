import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="progress-bar">
      <div q:slot="description">
        <p>
          The progress bar component is used to show the completion rate of a given task in the form of a filled bar where you can also add a label
          indicating percentage
        </p>
        <Hr />
        <p>
          Use the progress bar component from Flowbite Qwik to show the percentage and completion rate of a given task using a visually friendly bar
          meter based on multiple styles and sizes.
        </p>
        <p>
          Choose one of the examples below for your application and use the Qwik props to update the progress fill rate, label, sizing, and colors and
          customize with the classes from Tailwind CSS.
        </p>
        <p>To start using the progress bar component make sure you import it first from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { ProgressBar } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik ProgressBar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The progress bar component is used to show the completion rate of a given task in the form of a filled bar where you can also add a label indicating percentage',
    },
  ],
})
