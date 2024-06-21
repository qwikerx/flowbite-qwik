/**
 * title: Default list group
 * description: Use the default example to create a simple list of items inside a menu by using the ListGroup component with ListGroup.Item child components inside of it.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ListGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex justify-center">
      <ListGroup class="w-48">
        <ListGroup.Item>Profile</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item disabled>Download</ListGroup.Item>
      </ListGroup>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
