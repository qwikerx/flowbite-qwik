/**
 * title: Unstyled
 * description: Use the unstyled prop to disable the list style bullets or numbers.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { List } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <List unstyled>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
