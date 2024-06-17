import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="modal">
      <div q:slot="description">
        Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Modal - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles',
    },
  ],
})
