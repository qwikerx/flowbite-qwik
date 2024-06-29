import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="drawer">
      <div q:slot="description">
        <p>
          The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and
          placements
        </p>
        <Hr />
        <p>
          Use the Drawer component (or "off-canvas") to show a fixed element relative to the document page from any side for navigation, contact
          forms, informational purposes or other user actions.
        </p>
        <p>
          You can set multiple options such as the placement, activate body scrolling, show or hide the backdrop and even use the swipeable edge
          functionality to show a small part of the drawer when it is not shown completely.
        </p>
        <p>To start using the drawer component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Drawer } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Drawer - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and placements',
    },
  ],
})
