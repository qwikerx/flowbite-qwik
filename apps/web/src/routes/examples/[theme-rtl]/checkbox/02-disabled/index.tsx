/**
 * title: Disabled state
 * description: This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { Checkbox } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <div class="p-3">
        <Checkbox disabled>Disable</Checkbox>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
