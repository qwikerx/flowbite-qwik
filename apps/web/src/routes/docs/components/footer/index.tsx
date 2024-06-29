import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="footer">
      <div q:slot="description">
        <p>
          Use the footer component at the end of your page to show content such as sitemap links, brand logo, social icons and more using Qwik and
          Tailwind CSS
        </p>
        <Hr />
        <p>
          The footer component is an important section of a website where you should provide content such as sitemap links, copyright text, logo of
          your brand, social media account links, and more.
        </p>
        <p>
          Get started with the examples from Flowbite Qwik based on multiple styles, sizes, and colors by using Qwik components and the utility
          classes from Tailwind CSS.
        </p>
        <p>To start using the footer component you need to import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Footer } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Footer - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo',
    },
  ],
})
