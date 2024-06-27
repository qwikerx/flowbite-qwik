/**
 * title: Placement
 * description: Update the placement of the tooltip using the placement prop. The default placement is top and you can also use right, bottom, and left.
 * height: 200
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Tooltip } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex justify-center gap-3 p-8 text-center">
      <Tooltip placement="top">
        <Button q:slot="trigger">Tooltip top</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
      <Tooltip placement="right">
        <Button q:slot="trigger">Tooltip right</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
      <Tooltip placement="bottom">
        <Button q:slot="trigger">Tooltip bottom</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
      <Tooltip placement="left">
        <Button q:slot="trigger">Tooltip left</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
