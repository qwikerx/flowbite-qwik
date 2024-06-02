/**
 * title: Badge with icon only
 * description: An alternative style for the badge component is by only showing an icon without any text. You can do this by removing the children from the component and only using the icon option.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'
import { IconRocketOutline } from '~/components/Icon'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap items-center">
      <Badge icon={IconRocketOutline} size="sm" />
      <Badge type="dark" icon={IconRocketOutline} size="sm" />
      <Badge type="green" icon={IconRocketOutline} size="sm" />
    </div>
  )
})
