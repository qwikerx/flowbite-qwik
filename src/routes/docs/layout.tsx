import { $, component$, Slot, useSignal } from '@builder.io/qwik'
import { Button } from '~/components/Button/Button'
import { IconDotsVerticalOutline } from '~/components/Icon'
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup } from '~/components/Sidebar'
import { DocFooter } from '~/components/__Footer/__Footer'
import { useComponentOuterClick } from '~/composables/use-outer-click'

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
          'fixed top-14 pb-14 left-0 h-full w-full max-w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-700 lg:translate-x-0',
          isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full',
        ]}
      >
        <SidebarItemGroup>
          <SidebarCollapse label="Getting Started" opened>
            <SidebarItem href="/docs/getting-started/introduction">Introduction</SidebarItem>
            <SidebarItem href="/docs/getting-started/quickstart">Quickstart</SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Components" opened>
            <SidebarItem href="/docs/components/accordion">Accordion</SidebarItem>
            <SidebarItem href="/docs/components/badge">Badge</SidebarItem>
            <SidebarItem href="/docs/components/breadcrumb">Breadcrumb</SidebarItem>
            <SidebarItem href="/docs/components/button">Button</SidebarItem>
            <SidebarItem href="/docs/components/drawer">Drawer</SidebarItem>
            <SidebarItem href="/docs/components/dropdown">Dropdown</SidebarItem>
            <SidebarItem href="/docs/components/jumbotron">Jumbotron</SidebarItem>
            <SidebarItem href="/docs/components/modal">Modal</SidebarItem>
            <SidebarItem href="/docs/components/navbar">Navbar</SidebarItem>
            <SidebarItem href="/docs/components/rating">Rating</SidebarItem>
            <SidebarItem href="/docs/components/sidebar">Sidebar</SidebarItem>
            <SidebarItem href="/docs/components/spinner">Spinner</SidebarItem>
            <SidebarItem href="/docs/components/tabs">Tabs</SidebarItem>
            <SidebarItem href="/docs/components/toast">Toast</SidebarItem>
            <SidebarItem href="/docs/components/toggle">Toggle</SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Form">
            <SidebarItem href="/docs/components/input">Input</SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse label="Extra">
            <SidebarItem href="/docs/components/code-block">CodeBlock</SidebarItem>
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
