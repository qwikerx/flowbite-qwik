/**
 * title: Custom icons
 * description: You can customize icon separator between links
 */

import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'
import { IconArrowLeftOutline, IconBarsOutline } from '~/components/Icon'

export default component$(() => {
  return (
    <Breadcrumb solid>
      <BreadcrumbItem home href="#" homeIcon={IconBarsOutline}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#" arrowIcon={IconArrowLeftOutline}>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem arrowIcon={IconArrowLeftOutline}>Flowbite</BreadcrumbItem>
    </Breadcrumb>
  )
})
