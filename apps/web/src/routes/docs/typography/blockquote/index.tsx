import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="blockquote">
      <div q:slot="description">
        Get started with a collection of blockquote components when quoting external sources such as quotes inside an article, user reviews, and
        testimonials based on multiple examples of layouts, styles, and contexts. The main &lt;Blockquote&gt; component can be used together with the
        &lt;cite&gt; tag or attribute to also mention the source of the quote content.
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
