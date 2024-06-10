/**
 * title: Breadcrumb with Custom Icons
 * description: You can customize the icons for the home and arrow icons in the breadcrumb component.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Breadcrumb, BreadcrumbItem } from 'flowbite-qwik'
import { IconArrowLeftOutline, IconBarsOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="p-3">
      <Breadcrumb solid>
        <BreadcrumbItem home href="#" homeIcon={IconBarsOutline}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" arrowIcon={IconArrowLeftOutline}>
          Projects
        </BreadcrumbItem>
        <BreadcrumbItem arrowIcon={IconArrowLeftOutline}>Flowbite</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
