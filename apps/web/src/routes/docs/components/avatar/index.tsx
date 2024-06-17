import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="avatar">
      <div q:slot="description">
        Use the avatar component to show user profile images and placeholders in different sizes, colors and shapes based on Qwik and Tailwind CSS
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Avatar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the avatar component to show user profile images and placeholders in different sizes, colors and shapes based on Qwik and Tailwind CSS',
    },
  ],
})
