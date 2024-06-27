/**
 * title: Button gradient monochrome
 * description: These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button gradient="blue">Blue</Button>
      <Button gradient="cyan">Cyan</Button>
      <Button gradient="green">Green</Button>
      <Button gradient="lime">Lime</Button>
      <Button gradient="pink">Pink</Button>
      <Button gradient="purple">Purple</Button>
      <Button gradient="red">Red</Button>
      <Button gradient="teal">Teal</Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
