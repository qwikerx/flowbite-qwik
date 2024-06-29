import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="dropdown">
      <div q:slot="description">
        <p>
          Use the dropdown component to trigger a list of menu items when clicking on an element such as a button or link based on multiple styles,
          sizes, and placements with Qwik
        </p>
        <Hr />
        <p>
          The dropdown component is a UI element built with Qwik that displays a list of items when a trigger element (e.g., a button) is clicked. You
          can use it to build dropdown menus, lists, and more.
        </p>
        <p>
          The default styles are built using utility classes from Tailwind CSS. You can customize the behavior and positioning of the dropdowns using
          custom props from Qwik.
        </p>
        <p>To start using the component make sure that you have imported it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Dropdown } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Dropdown - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements',
    },
  ],
})
