/**
 * title: Prefix
 * description: Use this example to add a prefix to the input field.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { IconSearchOutline, Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal('')
  return (
    <div class="p-3">
      <h2 class="text-2xl font-semibold my-3">Prefix</h2>
      <Input
        bind:value={val}
        label="First name"
        placeholder="First name"
        prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
