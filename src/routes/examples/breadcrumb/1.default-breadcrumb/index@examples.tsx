/**
 * title: Default breadcrumb
 * description: Use the <Breadcrumb> component and the child <BreadcrumbItem> components to create and indicate a series of page structure and URLs to help the user navigate through the website. You can use the href prop to make the breadcrumb items clickable and the icon prop to add an icon to the breadcrumb item such as for the homepage.
 */

import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'

export default component$(() => {
  return (
    <Breadcrumb>
      <BreadcrumbItem home href="#">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite</BreadcrumbItem>
    </Breadcrumb>
  )
})
