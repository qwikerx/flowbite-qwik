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
            <source media="(min-width: 900px)" srcset="/profile-picture-3.jpg" />
            <source media="(min-width: 480px)" srcset="/profile-picture-4.jpg" />
            <img alt="" src="/profile-picture-5.jpg" height="48" width="48" />
          </picture>
        }
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
