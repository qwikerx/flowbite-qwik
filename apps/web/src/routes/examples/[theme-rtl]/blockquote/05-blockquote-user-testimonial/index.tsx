/**
 * title: User testimonial
 * description: This example can be used for user testimonials by mentioning the author and occupation of the author.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar, Blockquote } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <figure class="mx-auto max-w-(--breakpoint-md) text-center">
      <svg
        class="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p class="text-2xl font-medium italic text-gray-900 dark:text-white">
          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </Blockquote>
      <figcaption class="mt-6 flex items-center justify-center space-x-3">
        <Avatar
          rounded
          size="xs"
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
          alt="profile picture"
        />
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
      </figcaption>
    </figure>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
