/**
 * title: Button pills
 * description: The button pills can be used as an alternative style by using fully rounded edges.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button color="default" pill>
        Default
      </Button>
      <Button color="alternative" pill>
        Alternative
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="green" pill>
        Green
      </Button>
      <Button color="red" pill>
        Red
      </Button>
      <Button color="yellow" pill>
        Yellow
      </Button>
      <Button color="purple" pill>
        Purple
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
