/**
 * title: Default Dropdown
 * description: Use this example to create a simple dropdown with a list of menu items by adding child <Dropdown.Item> components inside the main <Dropdown> component.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Dropdown } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
