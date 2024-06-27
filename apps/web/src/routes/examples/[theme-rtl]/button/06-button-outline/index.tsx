/**
 * title: Button outline
 * description: This incorporates an outline border
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button color="default" outline>
        Default
      </Button>
      <Button color="dark" outline>
        Dark
      </Button>
      <Button color="green" outline>
        Green
      </Button>
      <Button color="red" outline>
        Red
      </Button>
      <Button color="yellow" outline>
        Yellow
      </Button>
      <Button color="purple" outline>
        Purple
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
