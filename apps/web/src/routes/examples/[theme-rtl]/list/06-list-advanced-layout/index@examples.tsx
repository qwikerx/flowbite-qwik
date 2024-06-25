/**
 * title: Advanced layout
 * description: This example can be used to show more details for each list item such as the user’s name, email and profile picture.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar, List } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <List unstyled class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <List.Item class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar
            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
            alt="Neil image"
            rounded
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
        </div>
      </List.Item>
      <List.Item class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar
            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
            alt="Neil image"
            rounded
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>
        </div>
      </List.Item>
      <List.Item class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar
            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
            alt="Neil image"
            rounded
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
        </div>
      </List.Item>
      <List.Item class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar
            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
            alt="Neil image"
            rounded
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>
        </div>
      </List.Item>
      <List.Item class="pb-0 pt-3 sm:pt-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar
            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
            alt="Neil image"
            rounded
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
        </div>
      </List.Item>
    </List>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
