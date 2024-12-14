import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="date-picker">
      <div q:slot="description">
        <p>
          Use the datepicker component to select a date from a calendar view based on an input element by selecting the day, month, and year values
          using Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          The Datepicker component from Flowbite Qwik is an advanced UI element that you can use to allow users to pick a date from a calendar view by
          selecting the day, month, and year values which then will be available in the input field and state of the component.
        </p>
        <p>
          Follow the examples below to see how you can use the Datepicker component by importing it from the Flowbite Qwik library, customize the
          colors and behaviour of the component by overriding the default theme variables and using the props from Qwik.
        </p>
        <p>To start using the datepicker component you need to import it from the flowbite-qwik package :</p>
        <CodeBlock minimalist content='import { DatePicker } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik DatePicker - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the datepicker component to select a date from a calendar view based on an input element by selecting the day, month, and year values using Qwik and Tailwind CSS',
    },
  ],
})
