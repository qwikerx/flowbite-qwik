/**
 * title: Default tooltip
 * description: Wrap the trigger component with the <Tooltip> component and pass the tooltip content to the content prop of the <Tooltip> component.
 * height: 200
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Tooltip } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex justify-center p-8 text-center">
      <Tooltip style="dark">
        <Button q:slot="trigger">Hover me</Button>
        <div q:slot="content">This is a tooltip</div>
      </Tooltip>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
