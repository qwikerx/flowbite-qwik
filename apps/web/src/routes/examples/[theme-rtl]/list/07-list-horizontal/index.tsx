/**
 * title: Horizontal list
 * description: Use this example to create a horizontally aligned list of items.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { List } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <List horizontal>
      <List.Item>About</List.Item>
      <List.Item>Premium</List.Item>
      <List.Item>Campaigns</List.Item>
      <List.Item>Blog</List.Item>
      <List.Item>Affiliate Program</List.Item>
      <List.Item>FAQs</List.Item>
      <List.Item>Contact</List.Item>
    </List>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
