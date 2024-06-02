/**
 * title: Default badge
 * description: Here's a list of default <Badge> component examples where you can use the type property to change the type of the badge based on contextual colors such as info, gray, success, and more.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'
import { BadgeType } from '~/components/Badge/badge-types'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      {(['default', 'dark', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'] as BadgeType[]).map((type) => (
        <Badge type={type} content={type} />
      ))}
    </div>
  )
})
