import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="modal">
      <div q:slot="description">
        <p>
          Use the modal component to show an interactive dialog to your website users that overlays the main content based on multiple sizes, layouts,
          and styles
        </p>
        <Hr />
        <p>
          The modal component can be used to show any type of content such as text, form elements, and notifications to your website visitors by
          creating an off-canvas box on top of the main content area of your website.
        </p>
        <p>
          You can choose from multiple examples based on various styles, layouts, and elements inside the modal component and you can customize the
          behaviour, placement, and sizing using our custom Qwik props and the utility classes from Tailwind CSS.
        </p>
        <p>To get started with the modal component you first need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Modal } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Modal - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles',
    },
  ],
})
