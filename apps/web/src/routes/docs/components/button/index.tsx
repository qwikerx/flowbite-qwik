import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="button">
      <div q:slot="description">
        Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and
        shadows
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Button - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows',
    },
  ],
})
