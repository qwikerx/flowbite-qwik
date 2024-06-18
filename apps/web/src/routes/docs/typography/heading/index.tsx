import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="heading">
      <div q:slot="description">
        Get started with the heading component to define titles and subtitles on a web page and also improve the on-page SEO metrics of your website
        by targeting high-traffic keywords on Google. At least one unique H1 tag should be available for each page on your website with the next tags
        starting from H2 to H6 for each section. Choose from a collection of custom heading components based on multiple styles and layouts built with
        the utility classes from Tailwind CSS.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Heading - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts',
    },
  ],
})
