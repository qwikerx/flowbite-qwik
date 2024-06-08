/**
 * title: Placeholder initials
 * description: Alternatively to the placeholder image you can use the placeholderInitials prop to show the user initials.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Avatar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
