/**
 * title: Default list
 * description: Use this example to create a default unordered list of items using the List component with List.Item child components inside of it.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { List } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <List>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
