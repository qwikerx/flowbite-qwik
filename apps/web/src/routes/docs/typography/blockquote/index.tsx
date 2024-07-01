import { component$ } from '@builder.io/qwik'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="blockquote">
      <div q:slot="description">
        The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes
        inside an article
        <Hr />
        <p>
          Get started with a collection of blockquote components when quoting external sources such as quotes inside an article, user reviews, and
          testimonials based on multiple examples of layouts, styles, and contexts. The main <em>Blockquote</em> component can be used together with
          the
          <em>cite</em> tag or attribute to also mention the source of the quote content.
        </p>
        <p> To start using the component make sure that you have imported it from Flowbite Qwik:</p>
        <CodeBlock minimalist content='import { Blockquote } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Blockquote - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article',
    },
  ],
})
