/**
 * title: Disabled Textarea
 * description: Use the `disabled` prop to make the textarea component non-editable and non-interactive.
 * height: 200
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Textarea } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const textareaValue = useSignal('')

  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Textarea bind:value={textareaValue} disabled label="Your message" placeholder="Type something here..." class="w-full" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
