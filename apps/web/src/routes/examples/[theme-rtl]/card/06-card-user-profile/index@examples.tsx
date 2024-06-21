/**
 * title: User profile card
 * description: Use this example to show a user card with a profile picture, name, job title, buttons and a dropdown menu.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Button, Card, Dropdown, Heading } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Card class="max-w-sm">
      <div class="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div class="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
          width="96"
          class="mb-3 rounded-full shadow-lg"
        />
        <Heading tag="h5" class="mb-">
          Bonnie Green
        </Heading>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="mt-4 flex space-x-3 lg:mt-6">
          <Button href="#">Add friend</Button>
          <Button href="#" color="light">
            Message
          </Button>
        </div>
      </div>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
