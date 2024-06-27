/**
 * title: Dropdown sizes
 * description: The dropdown menus work with buttons of all sizes including smaller or larger ones.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownSize } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <>
      <div class="flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" size={size}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown>
        ))}
      </div>
      <div class="mt-4 flex gap-5">
        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (
          <Dropdown label="Dropdown button" size={size} inline>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown>
        ))}
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
