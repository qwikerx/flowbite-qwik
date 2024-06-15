import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="card">
      <div q:slot="description">
        Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog,
        application, user profiles, and more.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Card - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.',
    },
  ],
})
