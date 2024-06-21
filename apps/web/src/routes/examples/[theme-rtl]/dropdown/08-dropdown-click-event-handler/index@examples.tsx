/**
 * title: Dropdown click event handler
 * description: Add a custom onClick$ event handler to the <Dropdown.Item> component to handle the click event.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Item
        onClick$={() => {
          alert('click dashboard')
        }}
      >
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item
        onClick$={() => {
          alert('click settings')
        }}
      >
        Settings
      </Dropdown.Item>
      <Dropdown.Item
        onClick$={() => {
          alert('click earnings')
        }}
      >
        Earnings
      </Dropdown.Item>
      <Dropdown.Item
        onClick$={() => {
          alert('click sign-out')
        }}
      >
        Sign out
      </Dropdown.Item>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
