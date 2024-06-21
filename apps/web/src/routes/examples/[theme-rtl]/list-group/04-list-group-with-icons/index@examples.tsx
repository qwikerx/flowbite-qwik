/**
 * title: List group with icons
 * description: Add icons to the list group items by using the icon prop on the ListGroup.Item component.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ListGroup } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconAdjustmentsVerticalOutline, IconDownloadOutline, IconMessagesOutline, IconUserCircleOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <div class="flex justify-center">
      <ListGroup class="w-48">
        <ListGroup.Item icon={IconUserCircleOutline} active>
          Profile
        </ListGroup.Item>
        <ListGroup.Item icon={IconAdjustmentsVerticalOutline}>Settings</ListGroup.Item>
        <ListGroup.Item icon={IconMessagesOutline}>Messages</ListGroup.Item>
        <ListGroup.Item icon={IconDownloadOutline}>Download</ListGroup.Item>
      </ListGroup>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
