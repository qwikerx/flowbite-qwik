/**
 * title: List group with icons
 * description: Add icons to the list group items by using the icon prop on the ListGroupItem component.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ListGroup, ListGroupItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconAdjustmentsVerticalOutline, IconDownloadOutline, IconMessagesOutline, IconUserCircleOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <div class="flex justify-center">
      <ListGroup class="w-48">
        <ListGroupItem icon={IconUserCircleOutline} active>
          Profile
        </ListGroupItem>
        <ListGroupItem icon={IconAdjustmentsVerticalOutline}>Settings</ListGroupItem>
        <ListGroupItem icon={IconMessagesOutline}>Messages</ListGroupItem>
        <ListGroupItem icon={IconDownloadOutline}>Download</ListGroupItem>
      </ListGroup>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
