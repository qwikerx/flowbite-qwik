/**
 * title: With CTA
 * description: This example can be used to show a call to action button inside the sidebar next to the menu items.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import {
  Sidebar,
  SidebarItemGroup,
  IconHomeOutline,
  IconInboxOutline,
  IconUserCircleOutline,
  IconShoppingBagOutline,
  SidebarItem,
  IconFileEditSolid,
  IconAdressBookOutline,
  IconGearSolid,
  IconAtomSolid,
  SidebarCollapse,
  IconAdjustmentsHorizontalSolid,
  SidebarCta,
  Badge,
} from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const isCtaVisible = useSignal(true)

  return (
    <div class="p-3">
      <Sidebar highlight>
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
        {isCtaVisible.value && (
          <SidebarCta onClose$={() => (isCtaVisible.value = false)}>
            <Badge q:slot="badge" type="yellow" content="new" />

            <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
            </p>
            <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">
              Turn new navigation off
            </a>
          </SidebarCta>
        )}
      </Sidebar>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
