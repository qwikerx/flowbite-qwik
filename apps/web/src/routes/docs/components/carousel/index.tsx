import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="carousel">
      <div q:slot="description">
        Use the responsive carousel component to allow users to slide through multiple items and navigate between them using the control buttons and
        indicators. Choose from multiple examples and options to update the intervals, make the carousel static and set custom control button and
        indicator by configuring Qwik and the utility classes from Tailwind CSS.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Carousel - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options',
    },
  ],
})
