import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="pagination">
      <div q:slot="description">
        <p>
          Get started with the pagination component to indicate the number of pages with number, link, and control buttons and allow the user to
          navigate through these pages
        </p>
        <Hr />
        <p>
          The pagination component can be used to show a list of pages with numbers and links to allow the users to navigate through multiple pages,
          data from tables, and more.
        </p>
        <p>
          Choose one of the examples below based on various styles and sizes and customize them using the Qwik props API and the utility classes from
          Tailwind CSS.
        </p>
        <p>To start using the pagination component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Pagination } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Pagination - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the Tailwind CSS pagination element to indicate a series of content across various pages based on multiple styles and sizes',
    },
  ],
})
