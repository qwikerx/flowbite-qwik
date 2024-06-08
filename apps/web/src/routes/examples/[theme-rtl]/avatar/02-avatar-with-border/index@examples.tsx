/**
 * title: Avatar with border
 * description: Use the bordered prop to add a border style to the avatar.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Avatar img="/profile-picture-5.jpg" alt="avatar of Jese" rounded bordered />
      <Avatar img="/profile-picture-5.jpg" bordered />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
