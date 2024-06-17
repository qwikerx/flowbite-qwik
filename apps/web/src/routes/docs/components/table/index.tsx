import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="table">
      <div q:slot="description">
        The table component is an important UI component that you can use to effectively show complex amounts of data in the form of numbers, text,
        images, buttons, and links inside a structured layout of rows and columns. Use the custom Qwik components from Flowbite and the API reference
        of props to customize the table layout and content and the utility classes from Tailwind CSS to update the styles.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Table - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the table component to show text, images, links, and other elements inside a structured set of data made up of rows and columns of table cells',
    },
  ],
})
