import { component$, useSignal } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'
import {
  IconAdjustmentsHorizontalSolid,
  IconAdressBookOutline,
  IconAtomSolid,
  IconFileEditSolid,
  IconGearSolid,
  IconHomeOutline,
  IconInboxOutline,
  IconShoppingBagOutline,
  IconUserCircleOutline,
} from '~/components/Icon'
import { Sidebar } from '~/components/Sidebar/Sidebar'
import { SidebarCollapse } from '~/components/Sidebar/SidebarCollapse'
import { SidebarCta } from '~/components/Sidebar/SidebarCta'
import { SidebarItem } from '~/components/Sidebar/SidebarItem'
import { SidebarItemGroup } from '~/components/Sidebar/SidebarItemGroup'

export default component$(() => {
  const isCtaVisible = useSignal(true)
  return (
    <div>
      <h2 class="text-3xl font-semibold my-3">Sidebar</h2>
      <h2 class="text-2xl font-semibold my-3">Default sidebar</h2>

      <div class="w-80 h-[600px]relative m-auto">
        <Sidebar>
          <SidebarItemGroup>
            <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>

            <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>

            <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>

            <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>
          </SidebarItemGroup>
        </Sidebar>
      </div>

      <h2 class="text-2xl font-semibold my-3">Sidebar with groups</h2>

      <div class="w-80 h-[600px]relative m-auto">
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

      <h2 class="text-2xl font-semibold my-3">Sidebar with cta</h2>

      <div class="w-80 h-[600px]relative m-auto">
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
    </div>
  )
})
