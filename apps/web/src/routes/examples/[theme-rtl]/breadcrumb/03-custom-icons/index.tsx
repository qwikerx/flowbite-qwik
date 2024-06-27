/**
 * title: Breadcrumb with Custom Icons
 * description: You can customize the icons for the home and arrow icons in the breadcrumb component.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Breadcrumb } from 'flowbite-qwik'
import { IconArrowLeftOutline, IconBarsOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="p-3">
      <Breadcrumb solid>
        <Breadcrumb.Item home href="#" homeIcon={IconBarsOutline}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" arrowIcon={IconArrowLeftOutline}>
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item arrowIcon={IconArrowLeftOutline}>Flowbite</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
