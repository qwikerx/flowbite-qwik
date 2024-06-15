/**
 * title: Avatar dropdown
 * description: Use the <Dropdown> component to show a dropdown menu when clicking on the avatar component. This example is often used to show the user settings, account settings, and more.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar, Dropdown, DropdownItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="ml-16">
      <Dropdown
        as={
          <Avatar
            alt="User settings"
            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
            rounded
          />
        }
      >
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
