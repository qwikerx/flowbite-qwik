/**
 * title: Multi-level dropdown with custom chevron
 * description: The chevronIcon property offers customization for the chevron icon. Alternatively, for more complex scenarios, the renderChevronIcon option can be utilized. Here's an example.
 * height: 500
 */

import { component$ } from '@builder.io/qwik'
import { Sidebar, SidebarItemGroup, SidebarItem, SidebarCollapse } from 'flowbite-qwik'
import {
  IconHomeOutline,
  IconInboxOutline,
  IconUserCircleOutline,
  IconShoppingBagOutline,
  IconFileEditSolid,
  IconAdressBookOutline,
  IconGearSolid,
  IconAtomSolid,
  IconAdjustmentsHorizontalSolid,
} from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3">
      <Sidebar>
        <SidebarItemGroup>
          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>

          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>

          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>

          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>
        </SidebarItemGroup>

        <SidebarItemGroup>
          <SidebarItem icon={IconFileEditSolid}>Documentation</SidebarItem>

          <SidebarItem icon={IconAdressBookOutline}>Help</SidebarItem>

          <SidebarItem icon={IconGearSolid}>Settings</SidebarItem>

          <SidebarItem icon={IconAtomSolid}>Details</SidebarItem>

          <SidebarCollapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>
            <SidebarItem>Dashboard</SidebarItem>

            <SidebarItem>inbox</SidebarItem>

            <SidebarItem>Users</SidebarItem>

            <SidebarItem>Products</SidebarItem>
          </SidebarCollapse>
        </SidebarItemGroup>
      </Sidebar>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
