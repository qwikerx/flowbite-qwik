/**
 * title: Props divide
 * description: Use divide prop to add a dividing line between the toast content and the close button.
 * height: 400
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Toast } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-col space-y-2 p-3">
      <Toast id="default" divide>
        Default
      </Toast>
      <Toast id="success" divide type="success">
        Success
      </Toast>
      <Toast id="danger" divide type="danger">
        Danger
      </Toast>
      <Toast id="warning" divide type="warning">
        Warning
      </Toast>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
