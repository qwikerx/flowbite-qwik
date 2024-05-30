import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'
import { IconArrowLeftOutline, IconBarsOutline } from '~/components/Icon'

export default component$(() => {
  return (
    <section id="breadcrumbs">
      <div>
        <h2 class="text-2xl font-semibold my-3">Default breadcrumb</h2>
        <Breadcrumb>
          <BreadcrumbItem home href="#">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>Flowbite</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Solid breadcrumb</h2>
        <Breadcrumb solid>
          <BreadcrumbItem home href="#">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>Flowbite</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-3">Custom icons</h2>
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
    </section>
  )
})
