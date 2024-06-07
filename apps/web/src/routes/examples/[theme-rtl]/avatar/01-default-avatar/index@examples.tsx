/**
 * title: Default avatar
 * description: Here's a default example of the <Avatar> component where you can use the img prop to pass the image URL, the alt prop to pass a description of the image for accessibility and the rounded prop to make the avatar rounded.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Avatar img="/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <Avatar img="/profile-picture-5.jpg" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
