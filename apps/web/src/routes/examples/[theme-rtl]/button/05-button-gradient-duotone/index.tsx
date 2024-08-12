/**
 * title: Button gradient duotone
 * description: These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button gradient="purple-blue">Purple to blue</Button>
      <Button gradient="cyan-blue">Cyan to blue</Button>
      <Button gradient="green-blue">Green to blue</Button>
      <Button gradient="purple-pink">Purple to pink</Button>
      <Button gradient="pink-orange">Pink to orange</Button>
      <Button gradient="teal-lime">Teal to lime</Button>
      <Button gradient="red-yellow">Red to yellow</Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
