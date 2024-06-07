import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="modal">
      <div q:slot="explanation">
        Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles
      </div>
    </ComponentDocPage>
  )
})
