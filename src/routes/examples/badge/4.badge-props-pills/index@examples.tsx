/**
 * title: Badge with option pills
 * description: Use this example to make the corners even more rounded like pills for the badge component.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap items-center">
      <Badge pills content="Default" />
      <Badge pills type="dark" content="Dark" />
      <Badge pills type="red" content="Red" />
      <Badge pills type="green" content="Green" />
      <Badge pills type="yellow" content="Yellow" />
      <Badge pills type="indigo" content="Indigo" />
      <Badge pills type="purple" content="Purple" />
      <Badge pills type="pink" content="Pink" />
    </div>
  )
})
