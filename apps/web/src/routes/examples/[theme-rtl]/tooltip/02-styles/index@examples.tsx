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
      <Tooltip style="dark" trigger={<Button>Dark tooltip</Button>} content={<div>This is a tooltip</div>} />

      <Tooltip style="light" trigger={<Button>Light tooltip</Button>} content={<div>This is a tooltip</div>} />

      <Tooltip style="auto" trigger={<Button>Auto tooltip</Button>} content={<div>This is a tooltip</div>} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
