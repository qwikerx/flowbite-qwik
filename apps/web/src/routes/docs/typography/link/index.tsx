import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="link">
      <div q:slot="description">
        Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons,
        cards, inside paragraphs, and more. Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your
        website and become a returning user.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Link - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card',
    },
  ],
})
