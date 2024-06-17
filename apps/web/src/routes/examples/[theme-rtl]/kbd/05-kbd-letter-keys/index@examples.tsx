/**
 * title: Letter Keys
 * description: Use this example to show letter keys inside the KBD styled element.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Kbd } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-1">
      <Kbd>Q</Kbd>
      <Kbd>W</Kbd>
      <Kbd>E</Kbd>
      <Kbd>R</Kbd>
      <Kbd>T</Kbd>
      <Kbd>Y</Kbd>
      <Kbd>I</Kbd>
      <Kbd>O</Kbd>
      <Kbd>P</Kbd>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      <Kbd>F</Kbd>
      <Kbd>G</Kbd>
      <Kbd>H</Kbd>
      <Kbd>J</Kbd>
      <Kbd>K</Kbd>
      <Kbd>L</Kbd>
      <Kbd>Z</Kbd>
      <Kbd>X</Kbd>
      <Kbd>C</Kbd>
      <Kbd>V</Kbd>
      <Kbd>B</Kbd>
      <Kbd>N</Kbd>
      <Kbd>M</Kbd>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
