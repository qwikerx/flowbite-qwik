/**
 * title: User avatar
 * description: This example can be used to show a list of menu items and options when a user is logged into your application.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-5">
      <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>
        <DropdownItem header>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
        </DropdownItem>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>

      <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>
        <DropdownItem header>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
        </DropdownItem>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>

      <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>
        <DropdownItem header>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
        </DropdownItem>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
