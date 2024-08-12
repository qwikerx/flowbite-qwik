/**
 * title: Button as link
 * description: You can add a link to a Button component.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { Link, StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-2">
      <Button href="https://google.com" target="_blank">
        Google.com
      </Button>
      <Button href="/examples/blue-ltr/button/11-button-disabled">Quickstart</Button>
      <Button href="/examples/blue-ltr/button/13-button-full" tag={Link}>
        Internal link
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
