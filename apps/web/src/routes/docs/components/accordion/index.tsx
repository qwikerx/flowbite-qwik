import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="accordion">
      <div q:slot="description">
        Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute
        options
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Accordion - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options',
    },
  ],
})
