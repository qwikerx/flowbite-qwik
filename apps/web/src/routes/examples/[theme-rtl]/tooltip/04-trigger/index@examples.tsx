/**
 * title: Trigger
 * description: Use the trigger prop to change the trigger type of the tooltip if you want to show the tooltip when clicking on the trigger element instead of hovering over it.
 * height: 200
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Tooltip } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex text-center justify-center gap-3 p-8">
      <Tooltip trigger="hover">
        <Button q:slot="trigger">Tooltip hover</Button>

        <div q:slot="content">This is a tooltip</div>
      </Tooltip>

      <Tooltip trigger="click">
        <Button q:slot="trigger">Tooltip click</Button>

        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
