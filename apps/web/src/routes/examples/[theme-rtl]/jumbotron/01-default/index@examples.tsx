/**
 * title: Default jumbotron
 * description: Use this default example to show a title, description, and two CTA buttons for the jumbotron component.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { Jumbotron, Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Jumbotron>
      <Jumbotron.Heading tag="h2">We invest in the world’s potential</Jumbotron.Heading>
      <Jumbotron.SubText>
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </Jumbotron.SubText>
      <div class="flex gap-2 justify-center">
        <Button>Get started</Button>
        <Button color="alternative">Learn more</Button>
      </div>
    </Jumbotron>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
