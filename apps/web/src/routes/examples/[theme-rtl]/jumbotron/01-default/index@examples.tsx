/**
 * title: Default jumbotron
 * description: Use this default example to show a title, description, and two CTA buttons for the jumbotron component.
 */

import { component$ } from '@builder.io/qwik'
import { Jumbotron, JumbotronHeading, JumbotronSubText, Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '../../layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Jumbotron>
      <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>
      <JumbotronSubText>
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </JumbotronSubText>
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
