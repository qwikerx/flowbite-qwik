/**
 * title: Button slot default
 * description: Add content inside the button as default
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, IconArrowRightOutline, IconArrowRightSolid } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 items-center flex-wrap">
      <Button gradient="purple-blue" square>
        <IconArrowRightSolid class="w-5 h-5" />
      </Button>
      <Button color="default" pill square>
        <IconArrowRightSolid class="w-5 h-5" />
      </Button>
      <Button gradient="green-blue" square>
        Close something
      </Button>
      <Button color="default" outline pill square suffix={IconArrowRightOutline}>
        Open something
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
