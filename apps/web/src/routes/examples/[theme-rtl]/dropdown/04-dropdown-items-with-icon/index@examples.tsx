/**
 * title: Dropdown items with icon
 * description: Add custom icons next to the menu items by using the icon prop on the <Dropdown.Item> component.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { IconHomeOutline, IconSearchSolid, IconTextSizeOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Item header>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>
      </Dropdown.Item>
      <Dropdown.Item icon={IconHomeOutline}>Dashboard</Dropdown.Item>
      <Dropdown.Item icon={IconSearchSolid}>Settings</Dropdown.Item>
      <Dropdown.Item divider />
      <Dropdown.Item icon={IconTextSizeOutline}>Sign out</Dropdown.Item>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
