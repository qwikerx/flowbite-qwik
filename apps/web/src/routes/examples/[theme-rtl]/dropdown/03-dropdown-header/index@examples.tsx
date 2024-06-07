/**
 * title: Dropdown header
 * description: Use the option 'header' to <DropdownItem> component to add a header to the dropdown. You can use this to add a user profile image and name, for example.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <DropdownItem header>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
      </DropdownItem>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
