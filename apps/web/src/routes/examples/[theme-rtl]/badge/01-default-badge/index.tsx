/**
 * title: Default Badge
 * description: Use the following badge elements to indicate counts or labels inside or outside components.
 * height: 100
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Badge type="default" content="Default" />
      <Badge type="dark" content="Dark" />
      <Badge type="red" content="Red" />
      <Badge type="green" content="Green" />
      <Badge type="yellow" content="Yellow" />
      <Badge type="indigo" content="Indigo" />
      <Badge type="purple" content="Purple" />
      <Badge type="pink" content="Pink" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
