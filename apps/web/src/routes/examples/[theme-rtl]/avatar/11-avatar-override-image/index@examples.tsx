/**
 * title: Override image element
 * description: You can override the default image element by passing the img prop to the <Avatar> component. This is useful if you want to use a different image element like <Image>
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Avatar
        img={
          <picture>
            <source
              media="(min-width: 900px)"
              srcset="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"
            />
            <source
              media="(min-width: 480px)"
              srcset="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"
            />
            <img
              alt=""
              src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"
              height="48"
              width="48"
            />
          </picture>
        }
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
