/**
 * title: Dropdown with checkbox
 * description: Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown checkbox" closeWhenSelect={false}>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            id="checkbox-item-1"
            type="checkbox"
            value="item-1"
            class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Default checkbox
          </label>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            checked
            id="checkbox-item-2"
            type="checkbox"
            value="item-2"
            class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label for="checkbox-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Checked state
          </label>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            id="checkbox-item-3"
            type="checkbox"
            value="item-3"
            class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
          />
          <label for="checkbox-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Default checkbox
          </label>
        </div>
      </Dropdown.Item>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
