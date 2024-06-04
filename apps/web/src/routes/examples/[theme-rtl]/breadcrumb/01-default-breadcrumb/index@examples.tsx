/**
 * title: Default Breadcrumb
 * description: Use the following breadcrumb example to show the hierarchical structure of pages.
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Breadcrumb, BreadcrumbItem } from 'flowbite-qwik'

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

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}
