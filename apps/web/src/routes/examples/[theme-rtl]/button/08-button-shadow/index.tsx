/**
 * title: Button colored shadows
 * description: These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.
 * height: 200
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button gradient="blue" shadow>
        Blue with blue
      </Button>
      <Button gradient="cyan" shadow>
        Cyan with cyan
      </Button>
      <Button gradient="green" shadow>
        Green with green
      </Button>
      <Button gradient="lime" shadow>
        Lime with lime
      </Button>
      <Button gradient="pink" shadow>
        Pink with pink
      </Button>
      <Button gradient="purple" shadow>
        Purple with purple
      </Button>
      <Button gradient="red" shadow>
        Red with red
      </Button>
      <Button gradient="teal" shadow>
        Teal with teal
      </Button>
      <Button gradient="blue" shadow="red">
        Blue with red
      </Button>
      <Button gradient="cyan" shadow="teal">
        Cyan with teal
      </Button>
      <Button gradient="teal" shadow="purple">
        Teal with purple
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
