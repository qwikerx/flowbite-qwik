import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="alert">
      <div q:slot="description">
        Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on Qwik
        and Tailwind CSS
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Alert - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on Qwik and Tailwind CSS',
    },
  ],
})
