/**
 * title: Placement
 * description: Update the placement of the tooltip using the placement prop. The default placement is top and you can also use right, bottom, and left.
 * height: 200
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Tooltip } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex text-center justify-center gap-3 p-8">
      <Tooltip placement="top" trigger={<Button>Tooltip top</Button>} content={<div>This is a tooltip</div>} />

      <Tooltip placement="right" trigger={<Button>Tooltip right</Button>} content={<div>This is a tooltip</div>} />

      <Tooltip placement="bottom" trigger={<Button>Tooltip bottom</Button>} content={<div>This is a tooltip</div>} />

      <Tooltip placement="left" trigger={<Button>Tooltip left</Button>} content={<div>This is a tooltip</div>} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
