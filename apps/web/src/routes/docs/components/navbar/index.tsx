import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="navbar">
      <div q:slot="description">
        <p>
          The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts,
          sizes, and dropdowns
        </p>
        <Hr />
        <p>
          The navbar component is an important section of any website as it is the first section that appears on any page and it serves the purpose of
          allowing your users to navigate throughout your website.
        </p>
        <p>
          Generally, the navigation bar consists of the logo of your website, a list of menu items for navigation and other secondary elements such as
          buttons, dropdowns, and a hamburger menu for mobile devices.
        </p>
        <p>
          All interactivity and options are handled by using Qwik properties and you can customise the appearance of the navbar using the classes from
          Tailwind CSS.
        </p>
        <p>To start using the navbar component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Navbar } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Navbar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns',
    },
  ],
})
