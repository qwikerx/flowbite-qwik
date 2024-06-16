/**
 * title: Readonly Textarea
 * description: Use the `readonly` prop to make the textarea component non-editable but interactive.
 * height: 200
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Textarea } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const textareaValue = useSignal('Flowbite is awesome!')

  return (
    <div class="flex gap-2 flex-wrap p-6 ">
      <Textarea bind:value={textareaValue} readOnly label="Your message" placeholder="Type something here..." class="w-full" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
