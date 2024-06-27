/**
 * title: Button outline gradient
 * description: This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button gradient="purple-blue" outline>
        Purple to blue
      </Button>
      <Button gradient="cyan-blue" outline>
        Cyan to blue
      </Button>
      <Button gradient="green-blue" outline>
        Green to blue
      </Button>
      <Button gradient="purple-pink" outline>
        Purple to pink
      </Button>
      <Button gradient="pink-orange" outline>
        Pink to orange
      </Button>
      <Button gradient="teal-lime" outline>
        Teal to lime
      </Button>
      <Button gradient="red-yellow" outline>
        Red to yellow
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
