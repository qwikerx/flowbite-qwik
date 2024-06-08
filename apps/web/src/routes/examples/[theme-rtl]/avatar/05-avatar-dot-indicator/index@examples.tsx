/**
 * title: Dot indicator
 * description: You can use the status prop to show a dot indicator on the avatar, and you can use the statusPosition prop to change the position of the dot indicator. This is useful to show the user status like online, offline, busy, away, and more.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Avatar img="/profile-picture-5.jpg" status="online" />
      <Avatar img="/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
      <Avatar img="/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
      <Avatar img="/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
