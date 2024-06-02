/**
 * title: Badge with Icon
 * description: You can also use SVG icons inside the badge elements.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'
import { IconRocketOutline } from '~/components/Icon'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge icon={IconRocketOutline} content="Icon" />
      <Badge icon={IconRocketOutline} size="sm" content="Icon" />
    </div>
  )
})
