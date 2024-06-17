import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="toast">
      <div q:slot="description">
        The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from
        multiple styles, colors, sizes, and positions.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Toast - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions',
    },
  ],
})
