/**
 * title: Button sizes
 * description: Use these examples if you want to use smaller or larger buttons.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 items-center flex-wrap">
      <Button size="xs">Extra Small - xs</Button>
      <Button size="sm">Small - sm</Button>
      <Button size="md">Medium - md</Button>
      <Button size="lg">Large - lg</Button>
      <Button size="xl">Extra Large - xl</Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
