/**
 * title: Chips (dismissible badges)
 * description: This example can be used to make badges dismissible by adding a close button.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
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

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
