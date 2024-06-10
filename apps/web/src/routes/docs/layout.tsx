import { $, component$, Slot, useSignal } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Button, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, useComponentOuterClick } from 'flowbite-qwik'
import { IconDotsVerticalOutline } from 'flowbite-qwik-icons'
import { NavLink } from '~/components/NavLink/NavLink'

export default component$(() => {
  const isSidebarOpen = useSignal(false)
  const sidebar = useSignal<HTMLElement>()
  const sidebarButton = useSignal<HTMLElement>()

  useComponentOuterClick(
    [sidebar, sidebarButton],
    $(() => {
      isSidebarOpen.value = false
    }),
    isSidebarOpen,
  )

  return (
    <div>
      <Sidebar
        ref={sidebar}
        class={[
          'fixed z-50 top-16 xl:top-14 pb-14 left-0 h-full w-full max-w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-700 lg:translate-x-0',
          isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full',
        ]}
      >
        <SidebarItemGroup>
          <SidebarCollapse label="Getting Started" opened>
            <SidebarItem tag={NavLink} href="/docs/getting-started/introduction">
              Introduction
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/getting-started/quickstart">
              Quickstart
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Components" opened>
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
            <SidebarItem tag={NavLink} href="/docs/components/breadcrumb">
              Breadcrumb
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/button">
              Button
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
            <SidebarItem tag={NavLink} href="/docs/components/tabs">
              Tabs
            </SidebarItem>
            <SidebarItem tag={NavLink} href="/docs/components/toast">
              Toast
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Form">
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

      <div class="lg:ml-64">
        <div class="px-5 py-2 lg:hidden border-b border-gray-200 dark:border-gray-600">
          <Button ref={sidebarButton} color="light" prefix={IconDotsVerticalOutline} onClick$={() => (isSidebarOpen.value = true)}>
            Menu
          </Button>
        </div>
        <div class="p-5">
          <Slot />

          <DocFooter />
        </div>
      </div>
    </div>
  )
})
