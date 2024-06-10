/**
 * title: Dropdown items with icon
 * description: Add custom icons next to the menu items by using the icon prop on the <DropdownItem> component.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem } from 'flowbite-qwik'
import { IconHomeOutline, IconSearchSolid, IconTextSizeOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <DropdownItem header>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
      </DropdownItem>
      <DropdownItem icon={IconHomeOutline}>Dashboard</DropdownItem>
      <DropdownItem icon={IconSearchSolid}>Settings</DropdownItem>
      <DropdownItem divider />
      <DropdownItem icon={IconTextSizeOutline}>Sign out</DropdownItem>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
