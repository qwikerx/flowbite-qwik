import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="checkbox">
      <div q:slot="explanation">
        The checkbox component is used to toggle between two states, checked and unchecked. It is used to select one or more options in a list. This
        checkbox component is built with a label and a checkbox input element. It can be customized with different colors.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Checkbox - Flowbite',
})
