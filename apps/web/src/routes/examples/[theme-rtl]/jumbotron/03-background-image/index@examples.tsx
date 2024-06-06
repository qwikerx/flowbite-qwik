/**
 * title: Background image
 * description: Use this jumbotron to apply a background image with a darkening opacity effect to improve readability.
 */

import { component$ } from '@builder.io/qwik'
import { Jumbotron, JumbotronHeading, JumbotronSubText, Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '../../layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Jumbotron class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] dark:bg-gray-700 bg-gray-700 bg-blend-multiply">
      <JumbotronHeading tag="h2" class="text-white">
        We invest in the world’s potential
      </JumbotronHeading>
      <JumbotronSubText class="text-white">
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
