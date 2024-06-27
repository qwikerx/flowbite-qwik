/**
 * title: User Review
 * description: Use this example to show a user review with rating stars and the name and occupation of the author.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar, Blockquote, Rating } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <figure class="max-w-screen-md">
      <div class="mb-4 flex items-center">
        <Rating size="md" rating={4} />
      </div>
      <Blockquote>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">
          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </Blockquote>
      <figcaption class="mt-6 flex items-center space-x-3">
        <Avatar
          rounded
          size="xs"
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
          alt="profile picture"
        />
        <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
      </figcaption>
    </figure>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
