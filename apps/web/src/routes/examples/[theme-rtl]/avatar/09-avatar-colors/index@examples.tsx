/**
 * title: Avatar colors
 * description: If you want to change the default color of the avatar component you can pass the color prop. Colors that you can choose from are gray, light, purple, success, pink, and more.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <Avatar img="/profile-picture-5.jpg" rounded bordered color="gray" />
        <Avatar img="/profile-picture-5.jpg" rounded bordered color="failure" />
        <Avatar img="/profile-picture-5.jpg" rounded bordered color="purple" />
        <Avatar img="/profile-picture-5.jpg" rounded bordered color="success" />
        <Avatar img="/profile-picture-5.jpg" rounded bordered color="pink" />
      </div>
      <div class="flex flex-wrap gap-2">
        <Avatar img="/profile-picture-5.jpg" bordered color="gray" />
        <Avatar img="/profile-picture-5.jpg" bordered color="failure" />
        <Avatar img="/profile-picture-5.jpg" bordered color="purple" />
        <Avatar img="/profile-picture-5.jpg" bordered color="success" />
        <Avatar img="/profile-picture-5.jpg" bordered color="pink" />
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
