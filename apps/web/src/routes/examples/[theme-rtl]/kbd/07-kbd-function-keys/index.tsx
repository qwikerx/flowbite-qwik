/**
 * title: Function keys
 * description: This example can be used to denote function keys inside the KBD component.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Kbd } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-1">
      <Kbd>F1</Kbd>
      <Kbd>F2</Kbd>
      <Kbd>F3</Kbd>
      <Kbd>F4</Kbd>
      <Kbd>F5</Kbd>
      <Kbd>F6</Kbd>
      <Kbd>F7</Kbd>
      <Kbd>F8</Kbd>
      <Kbd>F9</Kbd>
      <Kbd>F10</Kbd>
      <Kbd>F11</Kbd>
      <Kbd>F12</Kbd>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
