import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="breadcrumb">
      <div q:slot="description">
        <p>Get started with the breadcrumb component to show the current page location based on the URL structure using Qwik and Tailwind CSS</p>
        <Hr />
        <p>
          The breadcrumb component can be used to indicate the current page's location within a navigational hierarchy and you can choose from
          multiple examples, colors, and sizes built with Qwik and based on the utility classes from Tailwind CSS.
        </p>
        <p>To start using the breadcrumb component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Breadcrumb } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Breadcrumb - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components',
    },
  ],
})
