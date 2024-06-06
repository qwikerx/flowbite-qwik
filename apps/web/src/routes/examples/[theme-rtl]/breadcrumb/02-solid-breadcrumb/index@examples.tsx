/**
 * title: Solid Breadcrumb
 * description: You can alternatively also use the breadcrumb components with a solid background.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Breadcrumb, BreadcrumbItem } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="p-3">
      <Breadcrumb solid>
        <BreadcrumbItem home href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>Flowbite</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
