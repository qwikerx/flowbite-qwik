/**
 * title: Stacked layout
 * description: Stack multiple avatars together by using the <AvatarGroup> component and by passing the stacked prop to the child components of the group. The <AvatarCounter> component can be used to show the total number of avatars in the group by passing the total prop and a link to the href prop to view all users.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar, AvatarGroup, AvatarGroupCounter } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <AvatarGroup>
        <Avatar img="/profile-picture-1.jpg" rounded stacked />
        <Avatar img="/profile-picture-2.jpg" rounded stacked />
        <Avatar img="/profile-picture-3.jpg" rounded stacked />
        <Avatar img="/profile-picture-4.jpg" rounded stacked />
        <Avatar img="/profile-picture-5.jpg" rounded stacked />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar img="/profile-picture-1.jpg" rounded stacked />
        <Avatar img="/profile-picture-2.jpg" rounded stacked />
        <Avatar img="/profile-picture-3.jpg" rounded stacked />
        <Avatar img="/profile-picture-4.jpg" rounded stacked />
        <AvatarGroupCounter total={99} href="#" />
      </AvatarGroup>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
