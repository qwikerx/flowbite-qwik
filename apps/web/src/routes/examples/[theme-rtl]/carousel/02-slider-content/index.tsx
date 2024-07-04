/**
 * title: Slider content
 * description: Instead of images you can also use any type of markup and content inside the carousel such as simple text.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Carousel } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Carousel>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 1</div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 2</div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 3</div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 4</div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 5</div>
      </Carousel.Slide>
    </Carousel>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
