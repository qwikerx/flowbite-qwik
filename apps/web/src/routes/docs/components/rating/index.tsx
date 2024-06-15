import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="rating">
      <div q:slot="description">
        Get started with the rating component to show an aggregate of reviews and scores in the forms of stars or numbers using the utility classes
        from Tailwind CSS and components from Flowbite.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Rating - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes',
    },
  ],
})
