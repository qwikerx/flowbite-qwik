/**
 * title: Required
 * description: Get started with this example if you want to apply the required state to an input field.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '../../layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal('')
  return (
    <>
      <div class="p-3">
        <h2 class="text-2xl font-semibold my-3">Disabled</h2>
        <Input bind:value={val} required label="First name" placeholder="First name" />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
