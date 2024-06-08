/**
 * title: Avatar sizes
 * description: Change the default size of the avatar component by passing the size prop. Sizes that you can choose from are xs, sm, md, lg, and xl.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Avatar img="/profile-picture-5.jpg" size="xs" />
      <Avatar img="/profile-picture-5.jpg" size="sm" />
      <Avatar img="/profile-picture-5.jpg" size="md" />
      <Avatar img="/profile-picture-5.jpg" size="lg" />
      <Avatar img="/profile-picture-5.jpg" size="xl" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
