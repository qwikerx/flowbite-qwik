/**
 * title: With CTA
 * description: This example can be used to show a call to action button inside the sidebar next to the menu items.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Sidebar, SidebarItemGroup, SidebarItem, SidebarCollapse, SidebarCta, Badge, useSidebarOpen } from 'flowbite-qwik'
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
  const isCtaVisible = useSignal(true)
  const { setIsOpen } = useSidebarOpen()

  return (
    <div class="p-3">
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
      <Sidebar highlight closeButton>
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
