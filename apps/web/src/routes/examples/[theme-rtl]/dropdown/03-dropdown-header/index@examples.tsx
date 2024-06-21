/**
 * title: Dropdown header
 * description: Use the option 'header' to <Dropdown.Item> component to add a header to the dropdown. You can use this to add a user profile image and name, for example.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Item header>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
      </Dropdown.Item>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
