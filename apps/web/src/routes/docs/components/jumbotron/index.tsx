import { component$ } from '@builder.io/qwik'
import { Button, Jumbotron, JumbotronHeading, JumbotronSubText } from 'flowbite-qwik'

export default component$(() => {
  return (
    <section id="jumbotrons">
      <h2 class="text-2xl font-semibold my-3">Default jumbotron</h2>
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

      <h2 class="text-2xl font-semibold my-3">Align left jumbotron</h2>
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

      <h2 class="text-2xl font-semibold my-3">Jumbotron with background image</h2>
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
    </section>
  )
})
