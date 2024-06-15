import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="tabs">
      <div q:slot="description">
        The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change
        content inside a container just below the tabs using the data attributes from Flowbite.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Tabs - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container',
    },
  ],
})
