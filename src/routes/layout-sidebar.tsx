import { component$, Slot } from '@builder.io/qwik'
import { Sidebar } from '~/components/Sidebar/Sidebar'
import { SidebarItem } from '~/components/Sidebar/SidebarItem'
import { SidebarItemGroup } from '~/components/Sidebar/SidebarItemGroup'
import { Toggle } from '~/components/Toggle/Toggle'
import { useDark } from '~/composables/use-dark'

export default component$(() => {
  const { isDark, setDarkModeValue } = useDark()

  return (
    <>
      <header class="w-full fixed top-0 left-0 px-5 flex justify-between items-center h-20 border-b shadow-sm">
        <a href="/docs/">
          <img src={`/logo-${isDark.value ? 'dark' : 'light'}.png`} width={804} height={183} alt="logo" class="md:w-60 w-28" />
        </a>

        <Toggle
          label={isDark.value ? 'Dark' : 'Light'}
          bind:checked={isDark}
          size="sm"
          onChange$={(value: boolean) => {
            setDarkModeValue(value ? 'dark' : 'light')
          }}
        />
      </header>
      <main class="p-6">
        <Sidebar class="fixed top-20">
          <SidebarItemGroup>
            <SidebarItem href="/docs/accordion">Accordion</SidebarItem>

            <SidebarItem href="/docs/badge">Badge</SidebarItem>

            <SidebarItem href="/docs/breadcrumb">Breadcrumb</SidebarItem>

            <SidebarItem href="/docs/button">Button</SidebarItem>

            <SidebarItem href="/docs/drawer">Drawer</SidebarItem>

            <SidebarItem href="/docs/dropdown">Dropdown</SidebarItem>

            <SidebarItem href="/docs/jumbotron">Jumbotron</SidebarItem>

            <SidebarItem href="/docs/modal">Modal</SidebarItem>

            <SidebarItem href="/docs/rating">Rating</SidebarItem>

            <SidebarItem href="/docs/sidebar">Sidebar</SidebarItem>

            <SidebarItem href="/docs/spinner">Spinner</SidebarItem>

            <SidebarItem href="/docs/tabs">Tabs</SidebarItem>

            <SidebarItem href="/docs/toast">Toast</SidebarItem>

            <SidebarItem href="/docs/toggle">Toggle</SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup title="Form">
            <SidebarItem href="/docs/input">Input</SidebarItem>
          </SidebarItemGroup>
        </Sidebar>
        <div class="pl-64 pt-20">
          <Slot />
        </div>
      </main>
    </>
  )
})
