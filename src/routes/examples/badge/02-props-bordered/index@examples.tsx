/**
 * title: Bordered badge
 * description: This example can be used to add a border accent to the badge component.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge size="sm" bordered content="Default" />
      <Badge size="sm" bordered type="dark" content="Dark" />
      <Badge size="sm" bordered type="red" content="Red" />
      <Badge size="sm" bordered type="green" content="Green" />
      <Badge size="sm" bordered type="yellow" content="Yellow" />
      <Badge size="sm" bordered type="indigo" content="Indigo" />
      <Badge size="sm" bordered type="purple" content="Purple" />
      <Badge size="sm" bordered type="pink" content="Pink" />
    </div>
  )
})
