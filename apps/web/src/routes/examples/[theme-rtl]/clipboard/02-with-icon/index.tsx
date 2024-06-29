/**
 * title: Input with copy button
 * description: This example can be used to copy the content of an input field by clicking on a button with an icon positioned inside the form element and also show a tooltip with a message when the text has been copied.
 * height: 200
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Clipboard, Input } from 'flowbite-qwik'

export default component$(() => {
  const inputValue = useSignal('')
  return (
    <div class="grid w-full max-w-64 pt-8">
      <div class="relative">
        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="col-span-6 block w-full" />

        <Clipboard.WithIcon valueToCopy="npm install flowbite-qwik" class="absolute end-2 top-1/2 inline-flex -translate-y-1/2" />
      </div>
    </div>
  )
})
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
