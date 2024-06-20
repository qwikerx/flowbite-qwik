import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="hr">
      <div q:slot="description">
        The HR component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants,
        and layouts.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik HR - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Create a horizontal line using the HR tag to separate content such as paragraphs, blockquotes, and other elements using the utility classes from Tailwind CSS',
    },
  ],
})
