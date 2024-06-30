import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="toast">
      <div q:slot="description">
        <p>
          Push notifications to your website visitors using the toast component and choose from multiple sizes, colors, styles, position and icons
          based on Qwik and Tailwind CSS
        </p>
        <Hr />
        <p>
          The toast component can be used to show notifications to your users in a non-intrusive way by positioning it to the corner of the screen. It
          can be used to show simple messages or more complex ones with buttons and other elements.
        </p>
        <p>
          Choose from one of the examples below that include different layouts, colors, styles, and icons that you can also customize using Qwik props
          and the utility classes from Tailwind CSS.
        </p>
        <p>To start using the toast component make sure you import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Toast } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Toast - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions',
    },
  ],
})
