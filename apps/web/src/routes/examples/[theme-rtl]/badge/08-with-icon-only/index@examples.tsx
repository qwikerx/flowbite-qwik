/**
 * title: Badge with Icon only
 * description: You can also use badge with only icon.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge, IconRocketOutline } from 'flowbite-qwik'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge icon={IconRocketOutline} size="sm" />
      <Badge type="dark" icon={IconRocketOutline} size="sm" />
      <Badge type="green" icon={IconRocketOutline} size="sm" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}
