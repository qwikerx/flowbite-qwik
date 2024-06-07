/**
 * title: Helper Text
 * description: Use this example to show a helper text below the input field for additional explanation and links.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Input } from 'flowbite-qwik'
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
        helper={
          <>
            We'll never share your details. Read our{' '}
            <a href="#" class="text-blue-600 dark:text-blue-500">
              Privacy Policy
            </a>
            .
          </>
        }
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
