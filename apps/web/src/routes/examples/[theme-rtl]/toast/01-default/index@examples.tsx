/**
 * title: Props type
 * description: Use these contextual toast components to show success, danger, or warning alert messages to your users.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toast } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-col p-3 space-y-2">
      <Toast id="default">Default</Toast>
      <Toast id="success" type="success">
        Success
      </Toast>
      <Toast id="danger" type="danger">
        Danger
      </Toast>
      <Toast id="warning" type="warning">
        Warning
      </Toast>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
