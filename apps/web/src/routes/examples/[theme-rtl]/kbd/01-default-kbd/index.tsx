/**
 * title: Default KBD
 * description: Here’s a list of KBD components that you can use inside any other element.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Kbd } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-1">
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Caps Lock</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Spacebar</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
