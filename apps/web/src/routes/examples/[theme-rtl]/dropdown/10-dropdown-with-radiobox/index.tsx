/**
 * title: Dropdown with radio
 * description: Enable more advanced interaction with your users by adding radio input elements inside the dropdown menu.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown radio" closeWhenSelect={false}>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            id="radio-item-1"
            type="radio"
            name="default-radio"
            value="item-1"
            class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label for="radio-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Default radio
          </label>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            checked
            id="radio-item-2"
            type="radio"
            name="default-radio"
            value="item-2"
            class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label for="radio-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Checked state
          </label>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            id="radio-item-3"
            type="radio"
            name="default-radio"
            value="item-3"
            class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label for="radio-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Default radio
          </label>
        </div>
      </Dropdown.Item>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
