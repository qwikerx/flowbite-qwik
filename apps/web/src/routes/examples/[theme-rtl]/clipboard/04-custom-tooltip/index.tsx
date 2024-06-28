/**
 * title: Custom Tooltip
 * description: Use the props `tooltipCopyLabel` and `tooltipCopiedLabel` to customize the tooltip labels of the Clipboard component.
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
      <div class="flex gap-3 pt-8 max-w-80">
        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="block w-full" />
        <Clipboard
          valueToCopy="npm install flowbite-react"
          label="Copy"
          class="h-full"
          tooltipCopiedLabel="It's copied"
          tooltipCopyLabel="Copy that"
        />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
