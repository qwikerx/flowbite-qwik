/**
 * title: Required Textarea
 * description: Use the `required` prop to make the textarea component a required field inside a form.
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
      <Textarea bind:value={textareaValue} required label="Your message" placeholder="Type something here..." class="w-full" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
