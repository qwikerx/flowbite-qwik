/**
 * title: Default Textarea
 * description: Get started with the default example of a textarea component below.
 * height: 300
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Textarea } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const textareaValue = useSignal('')

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <p class="text-sm mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">Textarea value: {textareaValue}</p>

      <Textarea bind:value={textareaValue} label="Your message" placeholder="Type something here..." class="w-full" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
