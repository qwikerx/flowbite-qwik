/**
 * title: Solid background
 * description: You can alternatively also use the breadcrumb components with a solid background.
 */

import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'

export default component$(() => {
  return (
    <Breadcrumb solid>
      <BreadcrumbItem home href="#">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite</BreadcrumbItem>
    </Breadcrumb>
  )
})
