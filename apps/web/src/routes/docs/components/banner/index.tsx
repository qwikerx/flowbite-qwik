import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="banner">
      <div q:slot="description">
        Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your
        website visitors fixed to the top or bottom part of the page as the user scroll down the main content area. Explore the following examples
        based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive
        element supporting dark mode.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Banner - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS',
    },
  ],
})
