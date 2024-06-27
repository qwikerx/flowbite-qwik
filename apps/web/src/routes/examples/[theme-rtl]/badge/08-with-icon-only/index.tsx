/**
 * title: Badge with Icon only
 * description: You can also use badge with only icon.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'
import { IconRocketOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Badge icon={IconRocketOutline} size="sm" />
      <Badge type="dark" icon={IconRocketOutline} size="sm" />
      <Badge type="green" icon={IconRocketOutline} size="sm" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
