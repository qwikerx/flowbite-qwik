/**
 * title: Dropdown sizes
 * description: The dropdown menus work with buttons of all sizes including smaller or larger ones.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem, DropdownSize } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" size={size}>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </Dropdown>
        ))}
      </div>
      <div class="flex gap-5 mt-4">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" size={size} inline>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </Dropdown>
        ))}
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
