import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { Hr } from 'flowbite-qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <ComponentDocPage name="sidebar">
      <div q:slot="description">
        <p>
          Use the sidebar component to show a list of menu items including multi-level dropdown menu on the left or right side of your page for admin
          dashboards and applications
        </p>
        <Hr />
        <p>
          The sidebar component is an UI component that you can use for the navigation mechanism in your website or application that you would
          position to the left or right side of your page.
        </p>
        <p>
          A sidebar can include content such as menu list items, dropdown, user profile information, CTA buttons, and more - you can use the custom
          props from Qwik to customize the options and the utility classes from Tailwind CSS to update the styles.
        </p>
        <p>To start using the sidebar component make sure you import it from flowbite-qwik :</p>
        <CodeBlock minimalist content='import { Sidebar } from "flowbite-qwik"' language="tsx" />
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Sidebar - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the sidebar component to show a list of menu items and multi-level menu items on either side of the page to navigate on your website',
    },
  ],
})
