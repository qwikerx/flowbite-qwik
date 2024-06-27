/**
 * title: Button full option
 * description: Display a button taking the full width of its container
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { IconHomeOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button prefix={IconHomeOutline} full>
        Buy
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
