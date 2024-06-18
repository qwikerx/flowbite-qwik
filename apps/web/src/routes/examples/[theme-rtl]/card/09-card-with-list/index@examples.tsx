/**
 * title: Card with list
 * description: Use this component to display a card with a list of items such as your latest customers or latest orders that include an image, descriptive text and a link to view more.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Card, Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Card class="max-w-sm">
      <div class="mb-4 flex items-center justify-between">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <Link href="#" class="text-sm">
          View all
        </Link>
      </div>
      <div class="flow-root">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="shrink-0">
                <img
                  alt="Neil image"
                  height="32"
                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/on9fjbionkpt1fqhtbov.jpg"
                  width="32"
                  class="rounded-full"
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="shrink-0">
                <img
                  alt="Bonnie image"
                  height="32"
                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
                  width="32"
                  class="rounded-full"
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="shrink-0">
                <img
                  alt="Michael image"
                  height="32"
                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/g5dmxlpqgtkar6bb55b6.jpg"
                  width="32"
                  class="rounded-full"
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="shrink-0">
                <img
                  alt="Lana image"
                  height="32"
                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
                  width="32"
                  class="rounded-full"
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
            </div>
          </li>
          <li class="pb-0 pt-3 sm:pt-4">
            <div class="flex items-center space-x-4">
              <div class="shrink-0">
                <img
                  alt="Thomas image"
                  height="32"
                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
                  width="32"
                  class="rounded-full"
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
