/**
 * title: Default styles
 * description: Use the style prop to change the style of the tooltip. The default style is light and you can also use dark.
 * height: 200
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Tooltip } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex text-center justify-center gap-3 p-8">
      <Tooltip style="dark">
        <Button q:slot="trigger">Dark tooltip</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
      <Tooltip style="light">
        <Button q:slot="trigger">Light tooltip</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
      <Tooltip style="auto">
        <Button q:slot="trigger">Auto tooltip</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
