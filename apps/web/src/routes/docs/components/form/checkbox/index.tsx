import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="checkbox">
      <div q:slot="description">
        The checkbox component is used to toggle between two states, checked and unchecked. It is used to select one or more options in a list. This
        checkbox component is built with a label and a checkbox input element. It can be customized with different colors.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Checkbox - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors',
    },
  ],
})
