import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'

export default component$(() => {
  return (
    <ComponentDocPage name="jumbotron">
      <div q:slot="description">
        The Jumbotron (hero) component can be used as the first section of your website with a focus on a marketing message to increase the likelihood
        of the user to continue browsing your website. This UI component features a heading title, a short description, an optional CTA button,
        background image, gradient or solid background color and it’s generally inside of a card element.
      </div>
    </ComponentDocPage>
  )
})

export const head = () => ({
  title: 'Qwik Jumbotron - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the jumbotron component to show a marketing message to your users based on a headline and image inside of a card box based on Tailwind CSS',
    },
  ],
})
