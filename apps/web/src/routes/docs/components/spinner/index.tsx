import { component$ } from '@builder.io/qwik'
import { ComponentDocPage } from '~/components/ComponentDocPage/ComponentDocPage'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <ComponentDocPage name="spinner">
      <div q:slot="description">
        The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such
        as buttons to improve the user experience whenever data is being fetched from your server.
      </div>
    </ComponentDocPage>
  )
})

export const head: DocumentHead = () => ({
  title: 'Qwik Spinner - Flowbite',
  meta: [
    {
      name: 'description',
      content:
        'Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS',
    },
  ],
})
