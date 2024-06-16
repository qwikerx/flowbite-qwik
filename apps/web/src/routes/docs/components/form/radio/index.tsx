import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="radio">
      <div q:slot="description">
        Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple
        styles and colors.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Radio - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors.',
    },
  ],
})
