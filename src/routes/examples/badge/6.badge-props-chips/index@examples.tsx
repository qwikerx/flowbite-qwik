/**
 * title: Badge with option chips
 * description: Add a close icon to the badge to become a clickable chips
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap items-center">
      <Badge
        size="xs"
        chips
        onClose$={() => {
          alert('close')
        }}
        content="Default"
      />
      <Badge
        size="xs"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="dark"
        content="Dark"
      />
      <Badge
        size="xs"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="red"
        content="Red"
      />
      <Badge
        size="sm"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="green"
        content="Green"
      />
      <Badge
        size="sm"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="yellow"
        content="Yellow"
      />
      <Badge
        size="sm"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="indigo"
        content="Indigo"
      />
      <Badge
        size="sm"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="purple"
        content="Purple"
      />
      <Badge
        size="sm"
        chips
        onClose$={() => {
          alert('close')
        }}
        type="pink"
        content="Pink"
      />
    </div>
  )
})
