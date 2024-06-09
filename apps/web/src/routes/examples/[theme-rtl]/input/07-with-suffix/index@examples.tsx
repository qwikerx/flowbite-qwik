/**
 * title: Suffix
 * description: Use this example to add a suffix to the input field.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { IconSearchOutline, Input, Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal('')
  return (
    <div class="p-3">
      <Input
        bind:value={val}
        label="First name"
        placeholder="First name"
        size="lg"
        prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}
        suffix={<Button>Hello</Button>}
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
