/**
 * title: Dropdown click event handler
 * description: Add a custom onClick$ event handler to the <DropdownItem> component to handle the click event.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown, DropdownItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <DropdownItem
        onClick$={() => {
          alert('click dashboard')
        }}
      >
        Dashboard
      </DropdownItem>
      <DropdownItem
        onClick$={() => {
          alert('click settings')
        }}
      >
        Settings
      </DropdownItem>
      <DropdownItem
        onClick$={() => {
          alert('click earnings')
        }}
      >
        Earnings
      </DropdownItem>
      <DropdownItem
        onClick$={() => {
          alert('click sign-out')
        }}
      >
        Sign out
      </DropdownItem>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
