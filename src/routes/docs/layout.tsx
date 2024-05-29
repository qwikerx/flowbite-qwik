import { component$, Slot } from '@builder.io/qwik'
import { Sidebar, SidebarItem, SidebarItemGroup } from '~/components/Sidebar'

export default component$(() => {
  return (
    <div>
      <Sidebar class="fixed top-[57px]">
        <SidebarItemGroup title="Getting Started">
          <SidebarItem href="/docs/getting-started/introduction">Introduction</SidebarItem>
          <SidebarItem href="/docs/getting-started/quickstart">Quickstart</SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup title="Components">
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
        </SidebarItemGroup>
        <SidebarItemGroup title="Form">
          <SidebarItem href="/docs/components/input">Input</SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup title="Extra">
          <SidebarItem href="/docs/components/code-block">CodeBlock</SidebarItem>
        </SidebarItemGroup>
      </Sidebar>

      <div class="ml-64 px-5">
        <Slot />
      </div>
    </div>
  )
})
