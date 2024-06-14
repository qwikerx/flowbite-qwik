import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="carousel">
      <div q:slot="explanation">
        Use the responsive carousel component to allow users to slide through multiple items and navigate between them using the control buttons and
        indicators. Choose from multiple examples and options to update the intervals, make the carousel static and set custom control button and
        indicator by configuring Qwik and the utility classes from Tailwind CSS.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Carousel - Flowbite',
})
