import { $, component$, Slot, useSignal } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Button, IconDotsVerticalOutline, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, useComponentOuterClick } from 'flowbite-qwik'
import { Link } from '@builder.io/qwik-city'

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
          'fixed z-50 top-14 pb-14 left-0 h-full w-full max-w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-700 lg:translate-x-0',
          isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full',
        ]}
      >
        <SidebarItemGroup>
          <SidebarCollapse label="Getting Started" opened>
            <SidebarItem tag={Link} href="/docs/getting-started/introduction">
              Introduction
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/getting-started/quickstart">
              Quickstart
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Components" opened>
            <SidebarItem tag={Link} href="/docs/components/accordion">
              Accordion
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/badge">
              Badge
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/breadcrumb">
              Breadcrumb
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/button">
              Button
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/drawer">
              Drawer
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/dropdown">
              Dropdown
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/footer">
              Footer
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/icon">
              Icon
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/jumbotron">
              Jumbotron
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/modal">
              Modal
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/navbar">
              Navbar
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/rating">
              Rating
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/sidebar">
              Sidebar
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/spinner">
              Spinner
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/tabs">
              Tabs
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/toast">
              Toast
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Form">
            <SidebarItem tag={Link} href="/docs/components/input">
              Input
            </SidebarItem>
            <SidebarItem tag={Link} href="/docs/components/toggle">
              Toggle
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Extra">
            <SidebarItem tag={Link} href="/docs/components/code-block">
              CodeBlock
            </SidebarItem>
          </SidebarCollapse>
        </SidebarItemGroup>
      </Sidebar>

      <div class="lg:ml-64">
        <div class="bg-white px-2 py-2.5 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 lg:hidden">
          <Button ref={sidebarButton} color="dark" prefix={IconDotsVerticalOutline} onClick$={() => (isSidebarOpen.value = true)}>
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
