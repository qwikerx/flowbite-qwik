import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="time-picker">
      <div q:slot="description">
        <p>Use the timepicker component to select a time by selecting the hour, minute, and second values using Qwik and Tailwind CSS</p>
        <Hr />
        <p>
          Follow the examples below to see how you can use the Timepicker component by importing it from the Flowbite Qwik library, customize the
          suffix and behaviour of the component by overriding the default theme variables and using the props from Qwik.
        </p>
        <p>To start using the timepicker component you need to import it from the flowbite-qwik package :</p>
        <CodeBlock minimalist content='import { TimePicker } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik TimePicker - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the timepicker component to select a time by selecting the hour, minute, and second values using Qwik and Tailwind CSS',
    },
  ],
})
