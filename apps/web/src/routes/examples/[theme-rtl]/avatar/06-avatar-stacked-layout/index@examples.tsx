/**
 * title: Stacked layout
 * description: Stack multiple avatars together by using the <AvatarGroup> component and by passing the stacked prop to the child components of the group. The <AvatarCounter> component can be used to show the total number of avatars in the group by passing the total prop and a link to the href prop to view all users.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Avatar.Group>
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/on9fjbionkpt1fqhtbov.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/g5dmxlpqgtkar6bb55b6.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
          rounded
          stacked
        />
      </Avatar.Group>
      <Avatar.Group>
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/on9fjbionkpt1fqhtbov.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/g5dmxlpqgtkar6bb55b6.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
          rounded
          stacked
        />
        <Avatar
          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
          rounded
          stacked
        />
        <Avatar.GroupCounter total={99} href="#" />
      </Avatar.Group>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
