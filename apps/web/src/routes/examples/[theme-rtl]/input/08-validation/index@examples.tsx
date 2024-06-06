/**
 * title: Suffix
 * description: Use this example to add a suffix to the input field.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '../../layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal('')
  return (
    <div class="p-3">
      <h2 class="text-2xl font-semibold my-3">Validation</h2>
      <Input bind:value={val} label="First name" placeholder="First name" validationStatus="success" />
      <hr class="mt-4 border-0"></hr>
      <Input bind:value={val} label="First name" placeholder="First name" validationStatus="error" validationMessage="This field is not valid" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
