import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="button-group">
      <div q:slot="description">
        The button group component from Flowbite can be used to stack together multiple buttons and links inside a single element.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik ButtonGroup - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line',
    },
  ],
})
