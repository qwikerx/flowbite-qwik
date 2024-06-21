/**
 * title: List items as links
 * description: Convert the list items into links by adding the href prop to the ListGroup.Item component, first item has the active prop
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
        <ListGroup.Item href="#" active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item href="#">Settings</ListGroup.Item>
        <ListGroup.Item href="#">Messages</ListGroup.Item>
        <ListGroup.Item href="#">Download</ListGroup.Item>
      </ListGroup>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
