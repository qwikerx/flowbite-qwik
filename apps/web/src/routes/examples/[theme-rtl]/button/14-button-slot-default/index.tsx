/**
 * title: Button slot default
 * description: Add content inside the button as default
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { IconArrowRightOutline, IconArrowRightSolid } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button gradient="purple-blue" square>
        <IconArrowRightSolid class="h-5 w-5" />
      </Button>
      <Button color="default" pill square>
        <IconArrowRightSolid class="h-5 w-5" />
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
