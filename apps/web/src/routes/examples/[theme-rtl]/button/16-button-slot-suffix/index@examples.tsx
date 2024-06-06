/**
 * title: Button slot suffix
 * description: Add suffix content inside the button
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, IconArrowRightOutline } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 items-center flex-wrap">
      <Button suffix={IconArrowRightOutline}>Choose plan</Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
