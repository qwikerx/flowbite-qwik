/**
 * title: Default copy to clipboard
 * description: Use this example to copy the content of an input text field by clicking on a button and update the button text.
 * height: 200
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Clipboard, Input } from 'flowbite-qwik'

export default component$(() => {
  const inputValue = useSignal('')
  return (
    <>
      <div class="flex max-w-80 gap-3 pt-8">
        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="block w-full" />
        <Clipboard valueToCopy="npm install flowbite-qwik" label="Copy" class="h-full" />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
