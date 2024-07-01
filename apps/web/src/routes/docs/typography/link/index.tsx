import { component$ } from '@builder.io/qwik'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="link">
      <div q:slot="description">
        The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item,
        button, or card
        <Hr />
        <p>
          Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text,
          buttons, cards, inside paragraphs, and more.
        </p>
        <p>
          Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning
          user.
        </p>
        <p> To start using the component make sure that you have imported it from Flowbite Qwik:</p>
        <CodeBlock minimalist content='import { Link } from "flowbite-qwik"' language="tsx" />
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
