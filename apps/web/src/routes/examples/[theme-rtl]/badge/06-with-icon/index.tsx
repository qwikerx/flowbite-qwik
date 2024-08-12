/**
 * title: Badge with Icon
 * description: You can also use SVG icons inside the badge elements.
 * height: 100
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'
import { IconRocketOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Badge icon={IconRocketOutline} content="Icon" />
      <Badge icon={IconRocketOutline} size="sm" content="Icon" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
