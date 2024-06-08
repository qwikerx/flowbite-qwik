import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="alert">
      <div q:slot="explanation">
        Get started with the alert component to show contextual information to the user such as when validating forms or showing errors based on Qwik
        and Tailwind CSS
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Alert - Flowbite',
})
