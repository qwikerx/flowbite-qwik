/**
 * title: Carousel without indicators
 * description: Use the noIndicators prop to hide the indicators of the carousel
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Carousel } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Carousel noIndicators>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel.Slide>
    </Carousel>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
