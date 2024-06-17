/**
 * title: List items as links
 * description: Convert the list items into links by adding the href prop to the ListGroupItem component, first item has the active prop
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ListGroup, ListGroupItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex justify-center">
      <ListGroup class="w-48">
        <ListGroupItem href="#" active>
          Profile
        </ListGroupItem>
        <ListGroupItem href="#">Settings</ListGroupItem>
        <ListGroupItem href="#">Messages</ListGroupItem>
        <ListGroupItem href="#">Download</ListGroupItem>
      </ListGroup>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
