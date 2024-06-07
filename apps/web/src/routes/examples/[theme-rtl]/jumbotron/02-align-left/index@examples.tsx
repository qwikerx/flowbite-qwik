/**
 * title: Align left
 * description: Use this example to align the jumbotron content to the left.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { Jumbotron, JumbotronHeading, JumbotronSubText, Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Jumbotron align="left">
      <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>
      <JumbotronSubText>
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </JumbotronSubText>
      <div class="flex gap-2">
        <Button>Get started</Button>
        <Button color="alternative">Learn more</Button>
      </div>
    </Jumbotron>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
