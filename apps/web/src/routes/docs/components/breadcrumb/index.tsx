import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="breadcrumb">
      <div q:slot="description">Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components</div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Breadcrumb - Flowbite',
  meta: [
    {
      name: 'description',
      content: 'Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components',
    },
  ],
})
