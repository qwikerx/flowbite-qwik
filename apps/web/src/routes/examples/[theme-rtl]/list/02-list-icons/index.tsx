/**
 * title: Icons
 * description: This example can be used to apply custom icons instead of the default bullets for the list items.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { List } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { IconCheckCircleSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <List>
      <List.Item icon={IconCheckCircleSolid}>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item icon={IconCheckCircleSolid}>At least one lowercase character</List.Item>
      <List.Item icon={IconCheckCircleSolid}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
