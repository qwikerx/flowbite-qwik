/**
 * title: Button square
 * description: Sometimes you need a button to indicate an action using only an icon.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { IconArrowLeftOutline, IconArrowRightOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap">
      <Button gradient="red-yellow" square>
        <IconArrowRightOutline class="w-5 h-5" />
      </Button>
      <Button color="default" pill square>
        <IconArrowRightOutline class="w-5 h-5" />
      </Button>
      <Button color="dark" outline square>
        <IconArrowLeftOutline class="w-5 h-5" />
      </Button>
      <Button color="yellow" outline pill square>
        <IconArrowLeftOutline class="w-5 h-5" />
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
