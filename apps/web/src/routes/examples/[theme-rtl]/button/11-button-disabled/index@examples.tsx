/**
 * title: Button disabled
 * description: Use the following styles to indicate a disabled button. This can be often used inside form elements to disable the submit button before all the form elements have been completed and validated.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap">
      <Button color="default" disabled>
        Default
      </Button>
      <Button color="default" outline disabled>
        Default outline
      </Button>
      <Button gradient="red" disabled>
        Red gradient
      </Button>
      <Button gradient="red-yellow" disabled>
        Red to yellow gradient
      </Button>
      <Button gradient="red-yellow" outline disabled>
        Red to yellow outline
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
