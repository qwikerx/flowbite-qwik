/**
 * title: Slider content
 * description: Instead of images you can also use any type of markup and content inside the carousel such as simple text.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Carousel, CarouselSlice } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 1</div>
        </CarouselSlice>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 2</div>
        </CarouselSlice>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 3</div>
        </CarouselSlice>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 4</div>
        </CarouselSlice>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 5</div>
        </CarouselSlice>
      </Carousel>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
