/**
 * title: Prefix
 * description: Use this example to add a prefix to the input field.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Input } from 'flowbite-qwik'
import { IconSearchOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal('')
  return (
    <div class="p-3">
      <Input
        bind:value={val}
        label="First name"
        placeholder="First name"
        prefix={<IconSearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />}
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
