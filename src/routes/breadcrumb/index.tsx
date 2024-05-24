import { component$ } from '@builder.io/qwik'
import { Breadcrumb, BreadcrumbItem } from '~/components/Breadcrumb'

export default component$(() => {
  return (
    <section id="breadcrumbs" class="p-5">
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
          <BreadcrumbItem
            home
            href="#"
            homeIcon={
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            }
          >
            Home
          </BreadcrumbItem>
          <BreadcrumbItem
            href="#"
            arrowIcon={
              <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            }
          >
            Projects
          </BreadcrumbItem>
          <BreadcrumbItem
            arrowIcon={
              <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            }
          >
            Flowbite
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </section>
  )
})
