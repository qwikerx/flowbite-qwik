/**
 * title: Badge as link
 * description: You can also use badges as anchor elements to link to another page.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap items-center">
      <Badge href="#" content="Link" bordered />
      <Badge href="#" size="sm" content="Link" />
    </div>
  )
})
