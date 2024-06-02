/**
 * title: Breadcrumb with Custom Icons
 * description: You can customize the icons for the home and arrow icons in the breadcrumb component.
 */

import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'
import { IconArrowLeftOutline, IconBarsOutline } from '~/components/Icon'

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
