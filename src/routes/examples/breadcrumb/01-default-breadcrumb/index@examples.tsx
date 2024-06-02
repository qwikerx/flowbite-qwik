/**
 * title: Default Breadcrumb
 * description: Use the following breadcrumb example to show the hierarchical structure of pages.
 */

import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'

export default component$(() => {
  return (
    <div class="p-3">
      <Breadcrumb>
        <BreadcrumbItem home href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>Flowbite</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
})
