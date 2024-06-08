import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="avatar">
      <div q:slot="explanation">
        Use the avatar component to show user profile images and placeholders in different sizes, colors and shapes based on React and Tailwind CSS
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Avatar - Flowbite',
})
