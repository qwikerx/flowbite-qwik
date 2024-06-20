import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="badge">
      <div q:slot="description">
        The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data,
        such as the number of comments for an article or how much time has passed by since a comment has been made.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Badge - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data.',
    },
  ],
})
