/**
 * title: Badge with icon
 * description: Add an icon to the badge by using the icon option and pass the icon component as a value. This can be used to show the status of a task or a notification often used for admin dashboards and user feeds.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'
import { IconRocketOutline } from '~/components/Icon'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap items-center">
      <Badge icon={IconRocketOutline} content="Icon" />
      <Badge icon={IconRocketOutline} size="sm" content="Icon" />
    </div>
  )
})
