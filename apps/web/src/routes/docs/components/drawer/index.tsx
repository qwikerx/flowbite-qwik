import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="drawer">
      <div q:slot="description">
        The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and
        placements
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Drawer - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and placements',
    },
  ],
})
