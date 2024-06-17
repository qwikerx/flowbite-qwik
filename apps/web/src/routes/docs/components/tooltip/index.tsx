import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="tooltip">
      <div q:slot="description">
        Use the tooltip component from Flowbite Qwik to indicate helpful information when hovering over an element such as a button or link to improve
        the UI/UX of your website. Choose from multiple options, layouts, styles, colors, and animations from the examples below and customize the
        content and options using the custom Qwik API props and the utility classes from Tailwind CSS.{' '}
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Tooltip - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element',
    },
  ],
})
