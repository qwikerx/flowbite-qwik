import { component$, Slot } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, useSidebarOpen } from 'flowbite-qwik'
import { NavLink } from '~/components/NavLink/NavLink'

export default component$(() => {
  const { setIsOpen } = useSidebarOpen()

  return (
    <div>
      <Sidebar class="top-16 xl:top-14 pb-14">
        <SidebarItemGroup>
          <SidebarCollapse label="Getting Started" opened>
            <SidebarItem tag={NavLink} href="/docs/getting-started/introduction">
              Introduction
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/getting-started/quickstart">
              Quickstart
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Components (21)" opened>
            <SidebarItem tag={NavLink} href="/docs/components/accordion">
              Accordion
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/alert">
              Alert
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/avatar">
              Avatar
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/badge">
              Badge
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/banner">
              Banner
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/breadcrumb">
              Breadcrumb
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/button">
              Button
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/card">
              Card
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/carousel">
              Carousel
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/drawer">
              Drawer
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/dropdown">
              Dropdown
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/footer">
              Footer
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/jumbotron">
              Jumbotron
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/modal">
              Modal
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/navbar">
              Navbar
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/rating">
              Rating
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/sidebar">
              Sidebar
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/spinner">
              Spinner
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/table">
              Table
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/tabs">
              Tabs
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/toast">
              Toast
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Form (5)">
            <SidebarItem tag={NavLink} href="/docs/components/checkbox">
              Checkbox
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/input">
              Input
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/radio">
              Radio
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/select">
              Select
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/toggle">
              Toggle
            </SidebarItem>
          </SidebarCollapse>
        </SidebarItemGroup>
      </Sidebar>

      <div class="sm:ml-64">
        <div class="pb-1 lg:hidden border-b border-gray-200 dark:border-gray-600">
          <button
            onClick$={() => {
              setIsOpen(true)
            }}
            type="button"
            class="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-5">
          <Slot />

          <DocFooter />
        </div>
      </div>
    </div>
  )
})
