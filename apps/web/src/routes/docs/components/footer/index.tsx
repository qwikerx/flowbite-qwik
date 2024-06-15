import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="footer">
      <div q:slot="description">
        Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and
        a logo
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Footer - Flowbite',
  name: [
    {
      name: 'description',
      content:
        'Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo',
    },
  ],
})
