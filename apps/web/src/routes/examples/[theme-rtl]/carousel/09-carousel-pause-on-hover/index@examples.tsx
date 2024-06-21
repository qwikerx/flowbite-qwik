/**
 * title: Pause On Hover
 * description: To conditionally pause the carousel on mouse hover (desktop), or touch and hold (mobile), you can use the pauseOnHover property on the <Carousel> component. Default value is false.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Carousel } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
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
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
