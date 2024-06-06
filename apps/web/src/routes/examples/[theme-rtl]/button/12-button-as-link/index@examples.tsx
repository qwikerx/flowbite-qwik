/**
 * title: Button as link
 * description: You can add a link to a Button component.
 */

import { component$ } from '@builder.io/qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap">
      <Button href="https://google.com" target="_blank">
        Google.com
      </Button>
      <Button href="/pages/getting-started">Quickstart</Button>
      <Button href="/" tag={Link}>
        Internal link
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
