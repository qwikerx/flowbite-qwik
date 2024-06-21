/**
 * title: Dropdown with checkbox
 * description: Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown checkbox" closeWhenSelect={false}>
      <Dropdown.Item>
        <div class="flex items-center">
          <input
            id="checkbox-item-1"
            type="checkbox"
            value="item-1"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
