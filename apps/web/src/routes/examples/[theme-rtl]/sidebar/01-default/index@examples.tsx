/**
 * title: Default sidebar
 * description: Use this example to show a list of navigation menu items by adding <SidebarItem> children components inside the <Sidebar> component and pass the href prop to set a URL and icon to apply any icons from the flowbite-qwik-icons icon library. You can also add a text label as a badge by using the label prop from Qwik and the labelColor to set the color of the label background.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Sidebar, SidebarItemGroup, SidebarItem } from 'flowbite-qwik'
import { IconHomeOutline, IconInboxOutline, IconUserCircleOutline, IconShoppingBagOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3">
      <Sidebar highlight>
        <SidebarItemGroup>
          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>

          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>

          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>

          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>
        </SidebarItemGroup>
      </Sidebar>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
